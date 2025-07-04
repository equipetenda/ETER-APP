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
        Schema::create('amizade', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id_amigo1')->constrained('usuario');
            $table->foreignId('user_id_amigo2')->constrained('usuario');

            $table->unique(['user_id_amigo1', 'user_id_amigo2'], 'unique_amigo');

            $table->timestamps();
        });

        DB::statement('ALTER TABLE amizade ADD CONSTRAINT check_amigo CHECK (user_id_amigo1 < user_id_amigo2)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('amizade');
    }
};
