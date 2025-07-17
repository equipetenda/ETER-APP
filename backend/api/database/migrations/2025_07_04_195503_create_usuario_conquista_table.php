<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('usuario_conquista', function (Blueprint $table) {
            $table->id();

            $table->foreignId('conquista_id')->constrained('conquista');
            $table->foreignId('usuario_id')->constrained('usuario');

            $table->unique(['conquista_id', 'usuario_id'], 'unique_usuario_conquista');

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('usuario_conquista');
    }
};
