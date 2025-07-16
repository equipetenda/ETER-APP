<?php

namespace App\Http\Controllers;

use App\Models\Estrategia;

class EstrategiaController extends Controller
{

    public function getAll()
    {


       $estrategias = Estrategia::all()->values();

         if ($estrategias->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum estrategia encontrada'
            ], 200);
        }


        return response()->json([
            'data' => $estrategias,
            'success' => 'Estrategia(s) encontrada(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
