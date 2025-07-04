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
        Schema::create('diario_emocao', function (Blueprint $table) {
            $table->id();

            $table->foreignId('emocao_id')->constrained('emocao');
            $table->foreignId('diario_id')->constrained('diario');

            $table->unique(['emocao_id', 'diario_id'], 'unique_diario_emocao');

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
        Schema::dropIfExists('diario_emocao');
    }
};
