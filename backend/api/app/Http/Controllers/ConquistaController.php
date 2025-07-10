<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Conquista;
use App\Models\UsuarioConquista;

class ConquistaController extends Controller
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



        $conquistas= UsuarioConquista::where('usuario_id', $id)->get();


         if ($conquistas->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhuma Conquista encontrada'
            ], 200);
        }

        $conquistas->load('conquista');

        $conquistas->makeHidden(['conquista_id', 'usuario_id']);

        return response()->json([
            'data' => $conquistas,
            'success' => 'Conquista(s) encontrada(s) com sucesso',
            'error' => ''
        ], 200);
    }

    public function store(Request $request)
    {

        try {

            $validated = $request->validate([
                'conquista_id' => 'required|integer|min:1',
                'usuario_id' => 'required|integer|min:1'
            ]);


            UsuarioConquista::create([
                'conquista_id' => $validated['conquista_id'],
                'usuario_id' => $validated['usuario_id']
            ]);


            return response()->json([
                'data' => [],
                'success' => 'Conquista criada com sucesso',
                'error' => '',
                'errorTracking' => ''
            ], 200);



        }catch(\Exception $e){

            if($e->getCode() == 23000){
                return response()->json([
                    'data' => [],
                    'success' => '',
                    'error' => 'Conquista já cadastrada.',
                ], 400);
            }

            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possivel criar a Conquista',
                'errorTracking' => $e->getMessage(),
            ], 500);

        }
    }

     public function getAll()
    {


       $conquistas= Conquista::all()->values();

         if ($conquistas->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhuma Conquista encontrado'
            ], 200);
        }


        return response()->json([
            'data' => $conquistas,
            'success' => 'Conquista(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
