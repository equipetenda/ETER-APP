<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comentario;
use Illuminate\Support\Facades\Validator;

class ComentarioController extends Controller
{

    public function getAllByPostagem(Request $request)
    {
        $postagemId = $request->route('postagemId');


        if (!is_numeric($postagemId) || intval($postagemId) <= 0) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Id de postagem inválido'
            ], 400);
        }


        $comentarios = Comentario::where('postagem_id', $postagemId)
                                 ->whereNull('parent_id') // Pega apenas os comentários principais
                                 ->with('children') // Carrega as respostas diretas
                                 ->latest()
                                 ->get();

        if ($comentarios->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum comentário encontrado para esta postagem'
            ], 200);
        }

        return response()->json([
            'data' => $comentarios,
            'success' => 'Comentário(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'texto' => 'required|string|min:1|max:500',
            'postagem_id' => 'required_without:parent_id|integer|exists:postagem,id',
            'parent_id' => 'required_without:postagem_id|integer|exists:comentario,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Dados inválidos.',
                'errorTracking' => $validator->errors()
            ], 400);
        }

        try {
            $comentario = Comentario::create($request->all());


            if ($comentario->parent_id) {
                $comentario->load('parent');
            }

            return response()->json([
                'data' => $comentario,
                'success' => 'Comentário criado com sucesso',
                'error' => ''
            ], 201); // 201 Created

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possível criar o comentário',
                'errorTracking' => $e->getMessage()
            ], 500);
        }
    }


    // NÃO TESTADO
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|exists:comentario,id',
            'texto' => 'required|string|min:1|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Dados inválidos para atualização.',
                'errorTracking' => $validator->errors()
            ], 400);
        }

        try {
            $comentario = Comentario::find($request->input('id'));



            $comentario->texto = $request->input('texto');
            $comentario->save();

            return response()->json([
                'data' => $comentario,
                'success' => 'Comentário atualizado com sucesso',
                'error' => ''
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possível atualizar o comentário',
                'errorTracking' => $e->getMessage()
            ], 500);
        }
    }


    public function destroy(Request $request)
    {
        try{
            $validated = $request->validate([
                'id' => 'required|integer|min:1'
            ]);
        }catch(\Exception $e){
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Erro ao excluir o comentário',
                'errorTracking' => $e->getMessage()
            ], 400);
        }

        $comentario = Comentario::find($validated['id']);

        if (!$comentario) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Comentário não encontrado'
            ], 404);
        }


        $comentario->delete();

        return response()->json([
            'data' => [],
            'success' => 'Comentário excluído com sucesso',
            'error' => ''
        ], 200);
    }
}
