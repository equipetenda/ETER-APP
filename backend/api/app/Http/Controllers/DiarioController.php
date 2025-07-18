<?php

namespace App\Http\Controllers;

use App\Models\Diario;
use App\Models\Fumei;
use App\Models\Inicio;
use App\Models\Texto;
use App\Models\VontadeFumar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class DiarioController extends Controller
{
    public function getAllByUser(Request $request, $usuario_id)
    {
        if (!is_numeric($usuario_id) || intval($usuario_id) <= 0) {
            return response()->json([
                'error' => 'Id de usuário inválido'
            ], 400);
        }

        $diarios = Diario::where('usuario_id', $usuario_id)
            ->with([
                'sentimentos',
                'inicio.sintomas',
                'inicio.emocoes',
                'vontadeFumar.contexto',
                'vontadeFumar.estrategia',
                'fumei.contexto',
                'texto'
            ])
            ->orderBy('created_at', 'desc')
            ->get();

        if ($diarios->isEmpty()) {
            return response()->json([
                'data' => [],
                'message' => 'Nenhum registro no diário encontrado para este usuário.'
            ], 200);
        }

        return response()->json([
            'data' => $diarios,
            'message' => 'Diário(s) encontrado(s) com sucesso'
        ], 200);
    }

    public function storeHome(Request $request)
    {
        DB::beginTransaction();
        try {
            $validated = $request->validate([
                'usuario_id' => 'required|integer|exists:usuario,id',
                'sintomas' => 'sometimes|array',
                'sintomas.*' => 'integer|exists:sintoma,id',
                'emocoes' => 'sometimes|array',
                'emocoes.*' => 'integer|exists:emocao,id',
                'sentimentos' => 'sometimes|array',
                'sentimentos.*' => 'integer|exists:sentimento,id',
                'textos.*.conteudo' => 'nullable|string',
            ]);

           

            $diario = Diario::create([
                'usuario_id' => $validated['usuario_id'],
                'tipo' => 'INICIO',
            ]);

            $inicio = Inicio::create(['diario_id' => $diario->id]);

            if (!empty($validated['sintomas'])) {
                $inicio->sintomas()->attach($validated['sintomas']);
            }
            if (!empty($validated['emocoes'])) {
                $inicio->emocoes()->attach($validated['emocoes']);
            }
            if (!empty($validated['sentimentos'])) {
                $diario->sentimentos()->attach($validated['sentimentos']);
            }
            if (!empty($validated['textos'])) {
                Texto::create([
                    'diario_id' => $diario->id,
                    'conteudo' => $validated['textos'][0]['conteudo'],
                ]);
            }

            DB::commit();

            return response()->json([
                'data' => ['id' => $diario->id],
                'message' => 'Registro de início criado com sucesso'
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Dados inválidos.',
                'details' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Não foi possível criar o registro de início.',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    public function storeWantSmoke(Request $request)
    {
        DB::beginTransaction();
        try {
            $validated = $request->validate([
                'usuario_id' => 'required|integer|exists:usuario,id',
                'vontade_escala' => 'required|integer|min:1|max:5',
                'estrategia_escala' => 'required|integer|min:1|max:5',
                'contexto_id' => 'required|integer|exists:contexto,id',
                'estrategia_id' => 'required|integer|exists:estrategia,id',
                'sentimentos' => 'sometimes|array',
                'sentimentos.*' => 'integer|exists:sentimento,id',
                'conteudo' => 'nullable|string',
            ]);

            $diario = Diario::create([
                'usuario_id' => $validated['usuario_id'],
                'tipo' => 'VONTADE_FUMAR',
            ]);

            VontadeFumar::create([
                'diario_id' => $diario->id,
                'vontade_escala' => $validated['vontade_escala'],
                'estrategia_escala' => $validated['estrategia_escala'],
                'contexto_id' => $validated['contexto_id'],
                'estrategia_id' => $validated['estrategia_id'],
            ]);

            if (!empty($validated['sentimentos'])) {
                $diario->sentimentos()->attach($validated['sentimentos']);
            }
            if (!empty($validated['conteudo'])) {
                Texto::create([
                    'diario_id' => $diario->id,
                    'conteudo' => $validated['conteudo'],
                ]);
            }

            DB::commit();

            return response()->json([
                'data' => ['id' => $diario->id],
                'message' => 'Registro de vontade de fumar criado com sucesso'
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Dados inválidos.',
                'details' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Não foi possível criar o registro de vontade de fumar.',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    public function storeSmoked(Request $request)
    {
        DB::beginTransaction();
        try {
            $validated = $request->validate([
                'usuario_id' => 'required|integer|exists:usuario,id',
                'data' => 'required|date',
                'impulso_escala' => 'required|integer|min:1|max:5',
                'contexto_id' => 'required|integer|exists:contexto,id',
                'sentimentos' => 'sometimes|array',
                'sentimentos.*' => 'integer|exists:sentimento,id',
                'conteudo' => 'nullable|string',
            ]);

            $diario = Diario::create([
                'usuario_id' => $validated['usuario_id'],
                'tipo' => 'FUMEI',
            ]);

            Fumei::create([
                'diario_id' => $diario->id,
                'data' => $validated['data'],
                'impulso_escala' => $validated['impulso_escala'],
                'contexto_id' => $validated['contexto_id'],
            ]);

            if (!empty($validated['sentimentos'])) {
                $diario->sentimentos()->attach($validated['sentimentos']);
            }
            if (!empty($validated['conteudo'])) {
                Texto::create([
                    'diario_id' => $diario->id,
                    'conteudo' => $validated['conteudo'],
                ]);
            }

            DB::commit();

            return response()->json([
                'data' => ['id' => $diario->id],
                'message' => 'Registro de "fumei" criado com sucesso'
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Dados inválidos.',
                'details' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Não foi possível criar o registro de "fumei".',
                'details' => $e->getMessage()
            ], 500);
        }
    }
}
