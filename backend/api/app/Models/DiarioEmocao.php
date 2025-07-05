<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DiarioEmocao extends Model
{
    use HasFactory;

    protected $table = 'diario_emocao';

    protected $fillable = [
        'emocao_id',
        'diario_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function diario(): BelongsTo
    {
        return $this->belongsTo(Diario::class, 'diario_id');
    }

    public function emocao(): BelongsTo
    {
        return $this->belongsTo(Emocao::class, 'emocao_id');
    }
}
