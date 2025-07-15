<?php

namespace App\Http\Controllers;

use App\Models\Emocao;

class EmocaoController extends Controller
{

    public function getAll()
    {


       $emocoes = Emocao::all()->values();

         if ($emocoes->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhuma emoção encontrada'
            ], 200);
        }


        return response()->json([
            'data' => $emocoes,
            'success' => 'Emoção(os) encontrado(as) com sucesso',
            'error' => ''
        ], 200);
    }

}
