<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('vontade_fumar', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('vontade_escala')->unsigned();
            $table->tinyInteger('estrategia_escala')->unsigned();
            $table->foreignId('sentimento_id')->constrained('sentimento');
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('contexto_id')->constrained('contexto');
            $table->foreignId('estrategia_id')->constrained('estrategia');
            $table->foreignId('texto_id')->constrained('texto');
            $table->timestamps();
        });

        DB::statement('ALTER TABLE vontade_fumar ADD CONSTRAINT chk_vontade_escala CHECK (vontade_escala BETWEEN 1 AND 5)');
        DB::statement('ALTER TABLE vontade_fumar ADD CONSTRAINT chk_estrategia_escala CHECK (estrategia_escala BETWEEN 1 AND 5)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('vontade_fumar');
    }
};
