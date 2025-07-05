<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Emocao extends Model
{
    use HasFactory;

    protected $table = 'emocao';

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
            'diario_emocao',
            'emocao_id',
            'diario_id'
        )->withTimestamps();
    }
}
