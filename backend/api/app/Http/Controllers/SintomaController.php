<?php

namespace App\Http\Controllers;

use App\Models\Sintoma;

class SintomaController extends Controller
{

    public function getAll()
    {


       $sintomas = Sintoma::all()->values();

         if ($sintomas->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum sintoma encontrado'
            ], 200);
        }


        return response()->json([
            'data' => $sintomas,
            'success' => 'Sintoma(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
