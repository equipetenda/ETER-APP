<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InicioEmocao extends Model
{
    use HasFactory;

    protected $table = 'inicio_emocao';

    protected $fillable = [
        'inicio_id',
        'emocao_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function inicio(): BelongsTo
    {
        return $this->belongsTo(Inicio::class, 'inicio_id');
    }

    public function emocao(): BelongsTo
    {
        return $this->belongsTo(Emocao::class, 'emocao_id');
    }
}
