<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('sobre', function (Blueprint $table) {
            $table->id();
            $table->dateTime('data_parar_fumar');
            $table->enum('quando_deseja_parar_fumar', ['Agora', 'Em breve', 'Eu ja parei', 'Não sei'])->default('Não sei');
            $table->string('motivo_parar_fumar', 150);
            $table->string('medo_preocupacao_fumar', 150);
            $table->string('quando_comecou_fumar', 150);
            $table->string('tentativas_parar_fumar', 150);
            $table->string('motivos_desistencias', 150);
            $table->dateTime('data_inicio_fumar');
            $table->decimal('quant_cigarros_por_dias', 10, 2);
            $table->integer('quant_cigarros_por_maco');
            $table->decimal('valor_maco', 15, 2)->nullable();
            $table->foreignId('user_id')
                  ->constrained('usuario')
                  ->onDelete('cascade');
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('sobre');
    }
};
