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
        'diario_id',
        'contexto_id',
        'estrategia_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'vontade_escala' => 'integer',
        'estrategia_escala' => 'integer',
    ];

    public function diario(): BelongsTo
    {
        return $this->belongsTo(Diario::class, 'diario_id');
    }

    public function contexto(): BelongsTo
    {
        return $this->belongsTo(Contexto::class, 'contexto_id');
    }

    public function estrategia(): BelongsTo
    {
        return $this->belongsTo(Estrategia::class, 'estrategia_id');
    }
}
