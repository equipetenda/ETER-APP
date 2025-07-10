<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Amizade;

class AmizadeController extends Controller
{

    public function getAllByUser(Request $request)
    {

        $id = $request->route('id');


        if (!is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Id de usuário inválido'
            ], 400);
        }


        $amizades = Amizade::with([
            'amigo1:id,nome',
            'amigo2:id,nome'
        ])->where(function ($query) use ($id) {
            $query->where('user_id_amigo1', $id)
                  ->orWhere('user_id_amigo2', $id);
        })->get();

         if ($amizades->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhuma amizade encontrada'
            ], 200);
        }

        $amizades->makeHidden(['user_id_amigo1', 'user_id_amigo2']);



        return response()->json([
            'data' => $amizades,
            'success' => 'Amizade(s) encontrada(s) com sucesso',
            'error' => ''
        ], 200);
    }

    public function store(Request $request)
    {

        try {

            $validated = $request->validate([
                'user_id_amigo1' => 'required|integer|min:1',
                'user_id_amigo2' => 'required|integer|min:1'
            ]);


            Amizade::create([
                'user_id_amigo1' => $validated['user_id_amigo1'],
                'user_id_amigo2' => $validated['user_id_amigo2']
            ]);


            return response()->json([
                'data' => [],
                'success' => 'Amizade criada com sucesso',
                'error' => '',
                'errorTracking' => ''
            ], 200);



        }catch(\Exception $e){

            if($e->getCode() == 23000){
                return response()->json([
                    'data' => [],
                    'success' => '',
                    'error' => 'Amizade já cadastrada.',
                ], 400);
            }

            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possivel criar a amizade',
                'errorTracking' => $e->getMessage(),
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
                'error' => 'Erro ao excluir a amizade',
                'errorTracking' => $e->getMessage()
            ], 400);
        }

        $amizade = Amizade::find($validated['id']);


        if (!$amizade) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Usuário não encontrado'
            ], 404);
        }


        $amizade->delete();

        return response()->json([
            'data' => [],
            'success' => 'Amizade excluida com sucesso',
            'error' => ''
        ], 200);
    }

}
