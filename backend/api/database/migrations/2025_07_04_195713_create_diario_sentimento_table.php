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
        Schema::create('diario_sentimento', function (Blueprint $table) {
            $table->id();

            $table->foreignId('sentimento_id')->constrained('sentimento');
            $table->foreignId('diario_id')->constrained('diario');

            $table->unique(['sentimento_id', 'diario_id'], 'unique_diario_sentimento');

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
        Schema::dropIfExists('diario_sentimento');
    }
};
