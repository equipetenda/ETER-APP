<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DiarioSentimento extends Model
{
    use HasFactory;

    protected $table = 'diario_sentimento';

    protected $fillable = [
        'sentimento_id',
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

    public function sentimento(): BelongsTo
    {
        return $this->belongsTo(Sentimento::class, 'sentimento_id');
    }
}
