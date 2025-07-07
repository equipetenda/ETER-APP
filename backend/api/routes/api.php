<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;

Route::get('/', function(){
    return response()->json(['message' => 'bem vindo ao eter']);
});


Route::post('/usuario/store', [UsuarioController::class, 'store'])
    ->name('usuario.store');

Route::delete('/usuario/delete', [UsuarioController::class, 'destroy'])
->name('usuario.delete');
