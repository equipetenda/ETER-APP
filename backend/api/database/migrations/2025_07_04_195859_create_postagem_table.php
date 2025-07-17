<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('postagem', function (Blueprint $table) {
            $table->id();
            $table->text('texto');
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('postagem');
    }
};
