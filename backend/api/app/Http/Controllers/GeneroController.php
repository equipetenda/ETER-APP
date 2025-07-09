<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Genero;

class GeneroController extends Controller
{

    public function getAll(Request $request)
    {


       $generos = Genero::all()->values();

         if ($generos->isEmpty()) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Nenhum genero encontrado'
            ], 200);
        }


        return response()->json([
            'data' => $generos,
            'success' => 'Genero(s) encontrado(s) com sucesso',
            'error' => ''
        ], 200);
    }

}
