<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('diario', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['INICIO', 'VONTADE_FUMAR', 'FUMEI']);
            $table->foreignId('usuario_id')->constrained('usuario')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('diario');
    }
};
