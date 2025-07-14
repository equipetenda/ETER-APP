<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Postagem;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Exists;

class PostagemController extends Controller
{

    public function getAll()
    {

        $postagens = Postagem::with('usuario')->latest()->get();

        if ($postagens->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhuma postagem encontrada'
            ], 200);
        }


        $postagens->each(function ($postagem) {
            if ($postagem->usuario) {
                $postagem->usuario->makeHidden(['ativo', 'genero_id', 'data_nasc']);
            }
        });

        return response()->json([
            'data' => $postagens,
            'success' => 'Postagem(ns) encontrada(s) com sucesso',
            'error' => ''
        ], 200);
    }


    public function getOne(Request $request)
    {
        $id = $request->route('id');


        if (!is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Id de postagem inválido'
            ], 400);
        }


        $postagem = Postagem::with('usuario')->find($id);

        if (!$postagem) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Postagem não encontrada'
            ], 404);
        }

        return response()->json([
            'data' => $postagem,
            'success' => 'Postagem encontrada com sucesso',
            'error' => ''
        ], 200);
    }


    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'texto' => 'required|string|min:1|max:280',
            'usuario_id' => 'required|integer|exists:usuario,id' // Garante que o usuário exista na tabela 'usuario'.
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
            $postagem = Postagem::create($request->all());

            return response()->json([
                'data' => $postagem,
                'success' => 'Postagem criada com sucesso',
                'error' => ''
            ], 201); // 201 Created

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possível criar a postagem',
                'errorTracking' => $e->getMessage()
            ], 500);
        }
    }

    //NÃO TESTADO
    public function update(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|exists:postagem,id',
            'texto' => 'required|string|min:1|max:280',
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
            $postagem = Postagem::find($request->input('id'));


            $postagem->texto = $request->input('texto');
            $postagem->save();

            return response()->json([
                'data' => $postagem,
                'success' => 'Postagem atualizada com sucesso',
                'error' => ''
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possível atualizar a postagem',
                'errorTracking' => $e->getMessage()
            ], 500);
        }
    }


    public function destroy(Request $request)   {


         try{
            $validated = $request->validate([
                'id' => 'required|integer|min:1'
            ]);
        }catch(\Exception $e){
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Erro ao excluir a Postagem',
                'errorTracking' => $e->getMessage()
            ], 400);
        }


        $postagem = Postagem::find($validated['id']);

        if (!$postagem) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Postagem não encontrada'
            ], 404);
        }


        $postagem->delete();

        return response()->json([
            'data' => [],
            'success' => 'Postagem excluída com sucesso',
            'error' => ''
        ], 200);
    }
}
