<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Estrategia extends Model
{
    use HasFactory;

    protected $table = 'estrategia';

    protected $fillable = [
        'nome',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'estrategia_id');
    }
}
