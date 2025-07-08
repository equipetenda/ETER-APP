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
        // Esconde as tabelas de relacionamento intermediárias para não poluir o JSON final
        'amizadesEnviadas',
        'amizadesRecebidas',
    ];

    /**
     * Adiciona o atributo 'amigos' ao final do JSON/array do modelo.
     */
    protected $appends = ['amigos'];


    
    public function amizadesEnviadas(): HasMany
    {
        return $this->hasMany(Amizade::class, 'user_id_amigo1');
    }

    public function amizadesRecebidas(): HasMany
    {
        return $this->hasMany(Amizade::class, 'user_id_amigo2');
    }

    /**
     * ACCESSOR: Cria um atributo "virtual" 'amigos'.
     * Este método será chamado automaticamente quando você tentar acessar $usuario->amigos.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getAmigosAttribute(): Collection
    {
        // Verifica se os relacionamentos já foram carregados para evitar queries extras
        if (!$this->relationLoaded('amizadesEnviadas') || !$this->relationLoaded('amizadesRecebidas')) {
            $this->load('amizadesEnviadas.amigo2', 'amizadesRecebidas.amigo1');
        }

        $amigosEnviados = $this->amizadesEnviadas->pluck('amigo2');
        $amigosRecebidos = $this->amizadesRecebidas->pluck('amigo1');

        return $amigosEnviados->merge($amigosRecebidos);
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
