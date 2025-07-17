<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('amigo_avisado', function (Blueprint $table) {
            $table->id();

            $table->foreignId('amizade_id')->constrained('amizade');
            $table->foreignId('vontade_fumar_id')->constrained('vontade_fumar');

            $table->unique(['amizade_id', 'vontade_fumar_id'], 'unique_amizade_vontade_fumar');

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('amigo_avisado');
    }
};
