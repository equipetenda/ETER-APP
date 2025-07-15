<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('diario', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('escala_confianca')->unsigned();
            $table->timestamps();
        });

        DB::statement('ALTER TABLE diario ADD CONSTRAINT chk_escala_confianca CHECK (escala_confianca BETWEEN 1 AND 5)');
    }


    public function down(): void
    {
        Schema::dropIfExists('diario');
    }
};
