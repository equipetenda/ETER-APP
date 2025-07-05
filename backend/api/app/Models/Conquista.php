<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Conquista extends Model
{
    use HasFactory;

    protected $table = 'conquista';

    protected $fillable = [
        'nome',
        'img',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(
            Usuario::class,
            'usuario_conquista',
            'conquista_id',
            'usuario_id'
        )->withTimestamps();
    }
}
