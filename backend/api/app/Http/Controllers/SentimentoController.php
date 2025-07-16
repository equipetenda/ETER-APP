<?php

namespace App\Http\Controllers;

use App\Models\Sentimento;

class SentimentoController extends Controller
{

    public function getAll()
    {


       $sentimentos = Sentimento::all()->values();

         if ($sentimentos->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum sentimento encontrado'
            ], 200);
        }


        return response()->json([
            'data' => $sentimentos,
            'success' => 'Sentimento(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
