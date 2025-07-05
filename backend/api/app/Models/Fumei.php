<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fumei extends Model
{
    use HasFactory;

    protected $table = 'fumei';

    protected $fillable = [
        'data',
        'impulso_escala',
        'sentimento_id',
        'usuario_id',
        'contexto_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'data' => 'datetime',
        'impulso_escala' => 'integer',
    ];

    public function sentimento(): BelongsTo
    {
        return $this->belongsTo(Sentimento::class, 'sentimento_id');
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function contexto(): BelongsTo
    {
        return $this->belongsTo(Contexto::class, 'contexto_id');
    }
}
