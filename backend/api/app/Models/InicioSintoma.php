<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InicioSintoma extends Model
{
    use HasFactory;

    protected $table = 'inicio_sintoma';

    protected $fillable = [
        'inicio_id',
        'sintoma_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function inicio(): BelongsTo
    {
        return $this->belongsTo(Inicio::class, 'inicio_id');
    }

    public function sintoma(): BelongsTo
    {
        return $this->belongsTo(Sintoma::class, 'sintoma_id');
    }
}
