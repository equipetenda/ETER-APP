<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DiarioSintoma extends Model
{
    use HasFactory;

    protected $table = 'diario_sintoma';

    protected $fillable = [
        'diario_id',
        'sintoma_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function diario(): BelongsTo
    {
        return $this->belongsTo(Diario::class, 'diario_id');
    }

    public function sintoma(): BelongsTo
    {
        return $this->belongsTo(Sintoma::class, 'sintoma_id');
    }
}
