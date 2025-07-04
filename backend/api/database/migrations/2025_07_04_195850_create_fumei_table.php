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
        Schema::create('fumei', function (Blueprint $table) {
            $table->id();
            $table->dateTime('data');
            $table->tinyInteger('impulso_escala')->unsigned();
            $table->foreignId('sentimento_id')->constrained('sentimento');
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('contexto_id')->constrained('contexto');
            $table->timestamps();
        });

        DB::statement('ALTER TABLE fumei ADD CONSTRAINT chk_impulso_escala CHECK (impulso_escala BETWEEN 1 AND 5)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('fumei');
    }
};
