<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Usuario;
use App\Models\Sobre;

class UsuarioController extends Controller
{
    public function store(Request $request){

        try {

            $validated = $request->validate([
                'email' => 'required|email|max:255',
                'nome' => 'required|string|min:3|max:150|',
                'data_nasc' => 'required|date|date_format:Y-m-d',
                'genero_id' => 'required|string|min:1',

                'data_parar_fumar' => 'required|date|date_format:Y-m-d',
                'quando_deseja_parar_fumar' => 'nullable|string|min:1',
                'motivo_parar_fumar' => 'required|string|min:1|max:150',
                'medo_preocupacao_fumar' => 'required|string|min:1|max:150',
                'quando_comecou_fumar' => 'required|string|min:1|max:150',
                'tentativas_parar_fumar' => 'required|string|min:1|max:150',
                'motivos_desistencias' => 'required|string|min:1|max:150',
                'data_inicio_fumar' => 'required|date|date_format:Y-m-d',
                'quant_cigarros_por_dias' => 'required|integer|min:1',
                'quant_cigarros_por_maco' => 'required|integer|min:1',
                'valor_maco' => 'required|regex:/^\d+(\.\d{1,2})?$/|gt:0'
            ]);

             DB::beginTransaction();

            $usuario = Usuario::create([
                'email' => $validated['email'],
                'nome' => $validated['nome'],
                'data_nasc' => $validated['data_nasc'],
                'genero_id' => $validated['genero_id']
            ]);

            $sobre = Sobre::create([

                'data_parar_fumar' => $validated['data_parar_fumar'],
                'quando_deseja_parar_fumar' => $validated['quando_deseja_parar_fumar'],
                'motivo_parar_fumar' => $validated['motivo_parar_fumar'],
                'medo_preocupacao_fumar' => $validated['medo_preocupacao_fumar'],
                'quando_comecou_fumar' => $validated['quando_comecou_fumar'],
                'tentativas_parar_fumar' => $validated['tentativas_parar_fumar'],
                'motivos_desistencias' => $validated['motivos_desistencias'],
                'data_inicio_fumar' => $validated['data_inicio_fumar'],
                'quant_cigarros_por_dias' => $validated['quant_cigarros_por_dias'],
                'quant_cigarros_por_maco' => $validated['quant_cigarros_por_maco'],
                'valor_maco' => $validated['valor_maco'],

                'user_id' => $usuario->id,
            ]);


            DB::commit();
            return response()->json([
                'data' => [],
                'success' => 'Usuário criado com sucesso',
                'error' => '',
                'errorTracking' => ''
            ], 200);



        }catch(\Exception $e){
             DB::rollback();

            if($e->getCode() == 23000){
                return response()->json([
                    'data' => [],
                    'success' => '',
                    'error' => 'Usuário já cadastrado.',
                ], 400);
            }

            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Não foi possivel cadastrar o usuário',
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
                'error' => 'Erro ao deletar serviço ofertado',
                'errorTracking' => $e->getMessage()
            ], 400);
        }

        $usuario = Usuario::find($validated['id']);


        if (!$usuario) {
            return response()->json([
                'data' => [],
                'success' => '',
                'error' => 'Usuário não encontrado'
            ], 404);
        }


        $usuario->delete();

        return response()->json([
            'data' => [],
            'success' => 'Usuário excluido com sucesso',
            'error' => ''
        ], 200);
    }

}
