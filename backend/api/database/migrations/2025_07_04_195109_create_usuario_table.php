<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('nome');
            $table->dateTime('data_nasc')->nullable();
            $table->boolean('ativo')->default(true);

            $table->foreignId('genero_id')->constrained('genero');

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
