<?php

namespace App\Http\Controllers;

use App\Models\Contexto;

class ContextoController extends Controller
{

    public function getAll()
    {

       $contextos = Contexto::all()->values();

         if ($contextos->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum contexto encontrado'
            ], 200);
        }


        return response()->json([
            'data' => $contextos,
            'success' => 'Contexto(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
