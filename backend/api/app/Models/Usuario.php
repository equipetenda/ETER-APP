<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Collection;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuario';

    protected $fillable = [
        'email',
        'nome',
        'data_nasc',
        'ativo',
        'genero_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'amizadesEnviadas',
        'amizadesRecebidas',
    ];


    public function amizadesEnviadas(): HasMany
    {
        return $this->hasMany(Amizade::class, 'user_id_amigo1');
    }

    public function amizadesRecebidas(): HasMany
    {
        return $this->hasMany(Amizade::class, 'user_id_amigo2');
    }


    public function genero(): BelongsTo
    {
        return $this->belongsTo(Genero::class, 'genero_id');
    }

    public function postagens(): HasMany
    {
        return $this->hasMany(Postagem::class, 'usuario_id');
    }

    public function vontadesFumar(): HasMany
    {
        return $this->hasMany(VontadeFumar::class, 'usuario_id');
    }

    public function fumei(): HasMany
    {
        return $this->hasMany(Fumei::class, 'usuario_id');
    }

    public function usuarioConquistas(): HasMany
    {
        return $this->hasMany(UsuarioConquista::class, 'usuario_id');
    }

    public function sobre(): HasOne
    {
        return $this->hasOne(Sobre::class, 'user_id');
    }
}
