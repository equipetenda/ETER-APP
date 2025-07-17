<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('inicio_sintoma', function (Blueprint $table) {
            $table->id();

            $table->foreignId('sintoma_id')->constrained('sintoma');
            $table->foreignId('inicio_id')->constrained('inicio');

            $table->unique(['sintoma_id', 'inicio_id'], 'unique_inicio_sintoma');

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('inicio_sintoma');
    }
};
