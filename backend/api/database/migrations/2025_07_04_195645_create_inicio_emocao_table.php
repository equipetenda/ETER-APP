<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('inicio_emocao', function (Blueprint $table) {
            $table->id();

            $table->foreignId('emocao_id')->constrained('emocao');
            $table->foreignId('inicio_id')->constrained('inicio');

            $table->unique(['emocao_id', 'inicio_id'], 'unique_inicio_emocao');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('inicio_emocao');
    }
};
