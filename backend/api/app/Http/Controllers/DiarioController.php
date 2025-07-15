<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diario;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class DiarioController extends Controller
{

    /**
     * Busca todos os registros de diário de um usuário específico, com suas relações aninhadas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id O ID do usuário.
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllByUser(Request $request, $id)
    {
        // Validação básica para o ID do usuário
        if (!is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Id de usuário inválido'
            ], 400);
        }

        // Busca os diários do usuário, carregando as relações.
        // CORREÇÃO: A relação 'vontadesFumar' agora é aninhada dentro de 'textos'.
        // O with foi ajustado para 'textos.vontadesFumar' para carregar corretamente.
        $diarios = Diario::where('usuario_id', $id)
            ->with([
                'sintomas',
                'emocoes',
                'sentimentos',
                'textos.vontadesFumar.sentimento',
                'textos.vontadesFumar.contexto',
                'textos.vontadesFumar.estrategia'
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        if ($diarios->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum registro no diário encontrado para este usuário.'
            ], 200);
        }

        return response()->json([
            'data' => $diarios,
            'success' => 'Diário(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

    /**
     * Armazena um novo registro de diário completo, com todas as suas relações.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Inicia uma transação para garantir que ou tudo é salvo, ou nada é.
        DB::beginTransaction();

        try {

            $validated = $request->validate([
                'usuario_id' => 'required|integer|min:1|exists:usuario,id',
                'escala_confianca' => 'required|integer|min:1|max:5',
                'sintomas' => 'sometimes|array',
                'sintomas.*' => 'integer|exists:sintoma,id',
                'emocoes' => 'sometimes|array',
                'emocoes.*' => 'integer|exists:emocao,id',
                'sentimentos' => 'sometimes|array',
                'sentimentos.*' => 'integer|exists:sentimento,id',

                // Validação para textos e suas vontades de fumar aninhadas
                'textos' => 'sometimes|array',
                'textos.*.conteudo' => 'required|string|max:65535', // text type
                'textos.*.vontades_fumar' => 'sometimes|array',
                'textos.*.vontades_fumar.*.vontade_escala' => 'required|integer|min:1|max:5',
                'textos.*.vontades_fumar.*.estrategia_escala' => 'required|integer|min:1|max:5',
                'textos.*.vontades_fumar.*.sentimento_id' => 'required|integer|exists:sentimento,id',
                'textos.*.vontades_fumar.*.contexto_id' => 'required|integer|exists:contexto,id',
                'textos.*.vontades_fumar.*.estrategia_id' => 'required|integer|exists:estrategia,id',
            ]);


            $diario = Diario::create([
                'usuario_id' => $validated['usuario_id'],
                'escala_confianca' => $validated['escala_confianca'],
            ]);

            // 2. Associa as relações Many-to-Many (sintomas, emoções, sentimentos)
            if (!empty($validated['sintomas'])) {
                $diario->sintomas()->attach($validated['sintomas']);
            }
            if (!empty($validated['emocoes'])) {
                $diario->emocoes()->attach($validated['emocoes']);
            }
            if (!empty($validated['sentimentos'])) {
                $diario->sentimentos()->attach($validated['sentimentos']);
            }

            //Lógica para criar textos e suas vontades de fumar associadas
            if (!empty($validated['textos'])) {
                foreach ($validated['textos'] as $textoData) {
                    // Cria o texto associado ao diário
                    $texto = $diario->textos()->create([
                        'conteudo' => $textoData['conteudo']
                    ]);

                    // Se houver vontades de fumar para este texto, cria-as
                    if (!empty($textoData['vontades_fumar'])) {
                        foreach ($textoData['vontades_fumar'] as $vontadeData) {
                             // Cria a vontade de fumar, associando o ID do texto e o ID do usuário
                             $texto->vontadesFumar()->create([
                                'vontade_escala' => $vontadeData['vontade_escala'],
                                'estrategia_escala' => $vontadeData['estrategia_escala'],
                                'sentimento_id' => $vontadeData['sentimento_id'],
                                'contexto_id' => $vontadeData['contexto_id'],
                                'estrategia_id' => $vontadeData['estrategia_id'],
                                'usuario_id' => $validated['usuario_id'], // Pega o ID do usuário principal
                                // 'texto_id' é preenchido automaticamente pela relação
                             ]);
                        }
                    }
                }
            }

            
            DB::commit();

            return response()->json([
                'data' => ['id' => $diario->id],
                'success' => 'Registro no diário criado com sucesso',
                'error' => ''
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Dados inválidos.',
                'errorTracking' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possível criar o registro no diário.',
                'errorTracking' => $e->getMessage()
            ], 500);
        }
    }
}
