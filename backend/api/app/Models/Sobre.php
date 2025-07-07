<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sobre extends Model
{
    use HasFactory;

    protected $table = 'sobre';

    protected $fillable = [
        'data_parar_fumar',
        'quando_deseja_parar_fumar',
        'motivo_parar_fumar',
        'medo_preocupacao_fumar',
        'quando_comecou_fumar',
        'tentativas_parar_fumar',
        'motivos_desistencias',
        'data_inicio_fumar',
        'quant_cigarros_por_dias',
        'quant_cigarros_por_maco',
        'valor_maco',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'data_parar_fumar' => 'datetime',
        'data_inicio_fumar' => 'datetime',
        'quant_cigarros_por_dias' => 'decimal:2',
        'valor_maco' => 'decimal:2',
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'user_id');
    }
}
