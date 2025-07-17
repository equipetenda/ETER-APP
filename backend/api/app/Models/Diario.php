<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Diario extends Model
{
    use HasFactory;

    protected $table = 'diario';

    protected $fillable = [
        'usuario_id',
        'tipo',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function sentimentos(): BelongsToMany
    {
        return $this->belongsToMany(
            Sentimento::class,
            'diario_sentimento',
            'diario_id',
            'sentimento_id'
        )->withTimestamps();
    }

    public function texto(): HasOne
    {
        return $this->hasOne(Texto::class, 'diario_id');
    }

    public function vontadeFumar(): HasOne
    {
        return $this->hasOne(VontadeFumar::class, 'diario_id');
    }

    public function fumei(): HasOne
    {
        return $this->hasOne(Fumei::class, 'diario_id');
    }

    public function inicio(): HasOne
    {
        return $this->hasOne(Inicio::class, 'diario_id');
    }
}
