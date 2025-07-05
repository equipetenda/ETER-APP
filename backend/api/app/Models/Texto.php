<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Texto extends Model
{
    use HasFactory;

    protected $table = 'texto';

    protected $fillable = [
        'conteudo',
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

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'texto_id');
    }
}
