<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UsuarioConquista extends Model
{
    use HasFactory;

    protected $table = 'usuario_conquista';

    protected $fillable = [
        'usuario_id',
        'conquista_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function conquista(): BelongsTo
    {
        return $this->belongsTo(Conquista::class, 'conquista_id');
    }
}
