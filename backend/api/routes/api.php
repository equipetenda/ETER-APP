<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\AmizadeController;

Route::get('/', function(){
    return response()->json(['message' => 'bem vindo ao eter']);
});

// SOBRE
Route::get('/genero/get-all', [GeneroController::class, 'getAll'])
        ->name('genero.get-all');

// USUARIO
Route::get('/usuario/get-one/{id}', [UsuarioController::class, 'getOne'])
        ->name('usuario.get-one');

Route::get('/usuario/get-all', [UsuarioController::class, 'getAll'])
        ->name('usuario.get-all');

Route::post('/usuario/store', [UsuarioController::class, 'store'])
    ->name('usuario.store');

Route::delete('/usuario/delete', [UsuarioController::class, 'destroy'])
->name('usuario.delete');

// AMIZADE
Route::get('/amizade/get-all-by-user/{id}', [AmizadeController::class, 'getOneByUser'])
        ->name('amizade.get-all-by-user');

Route::post('/amizade/store', [AmizadeController::class, 'store'])
    ->name('amizade.store');

Route::delete('/amizade/delete', [AmizadeController::class, 'destroy'])
->name('amizade.delete');



