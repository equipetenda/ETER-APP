<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sentimento extends Model
{
    use HasFactory;

    protected $table = 'sentimento';

    protected $fillable = [
        'nome',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function diarios(): BelongsToMany
    {
        return $this->belongsToMany(
            Diario::class,
            'diario_sentimento',
            'sentimento_id',
            'diario_id'
        )->withTimestamps();
    }

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'sentimento_id');
    }

    public function fumeis(): HasMany
    {
        return $this->hasMany(Fumei::class, 'sentimento_id');
    }
}
