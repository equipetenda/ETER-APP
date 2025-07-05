<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Diario extends Model
{
    use HasFactory;

    protected $table = 'diario';

    protected $fillable = [
        'escala_confianca',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'escala_confianca' => 'integer',
    ];

    public function sintomas(): BelongsToMany
    {
        return $this->belongsToMany(
            Sintoma::class,
            'diario_sintoma',
            'diario_id',
            'sintoma_id'
        )->withTimestamps();
    }

    public function emocoes(): BelongsToMany
    {
        return $this->belongsToMany(
            Emocao::class,
            'diario_emocao',
            'diario_id',
            'emocao_id'
        )->withTimestamps();
    }

    public function sentimentos(): BelongsToMany
    {
        return $this->belongsToMany(
            Sentimento::class,
            'diario_sentimento',
            'diario_id',
            'sentimento_id'
        )->withTimestamps();
    }

    public function textos(): HasMany
    {
        return $this->hasMany(Texto::class, 'diario_id');
    }

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'diario_id');
    }
}
