<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diario;
use App\Models\Texto;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class DiarioController extends Controller
{


    public function getAllByUser(Request $request, $id)
    {

        if (!is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Id de usuário inválido'
            ], 400);
        }

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


    public function storeHome(Request $request)
    {

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

                'sentimentos' => 'sometimes|array',
                'textos.*.conteudo' => 'nullable|string|max:65535',

            ]);


            $diario = Diario::create([
                'usuario_id' => $validated['usuario_id'],
                'escala_confianca' => $validated['escala_confianca'],
            ]);

            if (!empty($validated['sintomas'])) {
                $diario->sintomas()->attach($validated['sintomas']);
            }
            if (!empty($validated['emocoes'])) {
                $diario->emocoes()->attach($validated['emocoes']);
            }
            if (!empty($validated['sentimentos'])) {
                $diario->sentimentos()->attach($validated['sentimentos']);
            }


            if (!empty($validated['textos'])) {
                Texto::create([
                'diario_id' => $diario->id,
                'conteudo' => $validated['textos'][0]['conteudo']
                ]);
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
