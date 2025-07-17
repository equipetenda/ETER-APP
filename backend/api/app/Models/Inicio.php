<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Inicio extends Model
{
    use HasFactory;

    protected $table = 'inicio';

    protected $fillable = [
        'diario_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function diario(): BelongsTo
    {
        return $this->belongsTo(Diario::class, 'diario_id');
    }

    public function sintomas(): BelongsToMany
    {
        return $this->belongsToMany(
            Sintoma::class,
            'inicio_sintoma',
            'inicio_id',
            'sintoma_id'
        )->withTimestamps();
    }

    public function emocoes(): BelongsToMany
    {
        return $this->belongsToMany(
            Emocao::class,
            'inicio_emocao',
            'inicio_id',
            'emocao_id'
        )->withTimestamps();
    }
}
