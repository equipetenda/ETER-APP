<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\AmizadeController;
use App\Http\Controllers\ConquistaController;
use App\Http\Controllers\PostagemController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\SintomaController;
use App\Http\Controllers\EmocaoController;
use App\Http\Controllers\SentimentoController;
use App\Http\Controllers\EstrategiaController;
use App\Http\Controllers\DiarioController;
use App\Http\Controllers\ContextoController;

Route::get('/', function(){
    return response()->json(['message' => 'bem vindo ao eter']);
});

// GENERO
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
Route::get('/amizade/get-all-by-user/{id}', [AmizadeController::class, 'getAllByUser'])
        ->name('amizade.get-all-by-user');

Route::post('/amizade/store', [AmizadeController::class, 'store'])
    ->name('amizade.store');

Route::delete('/amizade/delete', [AmizadeController::class, 'destroy'])
->name('amizade.delete');


// CONQUISTAS
Route::get('/conquista/get-all-by-user/{id}', [ConquistaController::class, 'getAllByUser'])
        ->name('conquista.get-all-by-user');

Route::post('/conquista/store', [ConquistaController::class, 'store'])
    ->name('conquista.store');

Route::get('/conquista/get-all', [ConquistaController::class, 'getAll'])
        ->name('conquista.get-all');


// POSTAGEM
Route::get('/postagem/get-all', [PostagemController::class, 'getAll'])
        ->name('postagem.get-all');

Route::get('/postagem/get-one/{id}', [PostagemController::class, 'getOne'])
        ->name('postagem.get-one');

Route::post('/postagem/store', [PostagemController::class, 'store'])
        ->name('postagem.store');

Route::put('/postagem/update', [PostagemController::class, 'update'])
        ->name('postagem.update');

Route::delete('/postagem/delete', [PostagemController::class, 'destroy'])
        ->name('postagem.delete');


// COMENTARIO
Route::get('/comentario/get-all-by-postagem/{postagemId}', [ComentarioController::class, 'getAllByPostagem'])
        ->name('comentario.get-all-by-postagem');

Route::post('/comentario/store', [ComentarioController::class, 'store'])
        ->name('comentario.store');

Route::put('/comentario/update', [ComentarioController::class, 'update'])
        ->name('comentario.update');

Route::delete('/comentario/delete', [ComentarioController::class, 'destroy'])
        ->name('comentario.delete');

// SINTOMA
Route::get('/sintoma/get-all', [SintomaController::class, 'getAll'])
        ->name('sintoma.get-all');


// EMOÇÃO
Route::get('/emocao/get-all', [EmocaoController::class, 'getAll'])
        ->name('emocao.get-all');


// SENTIMENTO
Route::get('/sentimento/get-all', [SentimentoController::class, 'getAll'])
        ->name('sentimento.get-all');

// ESTRATEGIA
Route::get('/estrategia/get-all', [EstrategiaController::class, 'getAll'])
        ->name('estrategia.get-all');

// CONTEXTO
Route::get('/contexto/get-all', [ContextoController::class, 'getAll'])
        ->name('contexto.get-all');


// DIARIO

Route::get('/diario/get-all-by-user/{id}', [DiarioController::class, 'getAllByUser'])
        ->name('diario.get-all-by-user');


Route::post('/diario/store-home', [DiarioController::class, 'storeHome'])
        ->name('diario.store-home');


Route::post('/diario/store-want-smoke', [DiarioController::class, 'storeWantSmoke'])
        ->name('diario.store-want-smoke');

Route::post('/diario/store-smoked', [DiarioController::class, 'storeSmoked'])
        ->name('diario.store-smoked');
