<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contexto extends Model
{
    use HasFactory;

    protected $table = 'contexto';

    protected $fillable = [
        'nome',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'contexto_id');
    }

    public function fumeis(): HasMany
    {
        return $this->hasMany(Fumei::class, 'contexto_id');
    }
}
