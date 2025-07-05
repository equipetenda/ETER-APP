<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VontadeFumar extends Model
{
    use HasFactory;

    protected $table = 'vontade_fumar';

    protected $fillable = [
        'vontade_escala',
        'estrategia_escala',
        'sentimento_id',
        'usuario_id',
        'contexto_id',
        'estrategia_id',
        'texto_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'vontade_escala' => 'integer',
        'estrategia_escala' => 'integer',
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

    public function estrategia(): BelongsTo
    {
        return $this->belongsTo(Estrategia::class, 'estrategia_id');
    }

    public function texto(): BelongsTo
    {
        return $this->belongsTo(Texto::class, 'texto_id');
    }
}
