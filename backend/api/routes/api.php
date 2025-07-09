<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\GeneroController;

Route::get('/', function(){
    return response()->json(['message' => 'bem vindo ao eter']);
});

Route::get('/usuario/get-one/{id}', [UsuarioController::class, 'getOne'])
        ->name('usuario.get-one');

Route::get('/usuario/get-all', [UsuarioController::class, 'getAll'])
        ->name('usuario.get-all');

Route::post('/usuario/store', [UsuarioController::class, 'store'])
    ->name('usuario.store');

Route::delete('/usuario/delete', [UsuarioController::class, 'destroy'])
->name('usuario.delete');


Route::get('/genero/get-all', [GeneroController::class, 'getAll'])
        ->name('genero.get-all');
