<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Amizade extends Model
{
    use HasFactory;

    protected $table = 'amizade';

    protected $fillable = [
        'user_id_amigo1',
        'user_id_amigo2',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function amigo1(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'user_id_amigo1');
    }

    public function amigo2(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'user_id_amigo2');
    }

    public function amigoAvisados(): HasMany
    {
        return $this->hasMany(AmigoAvisado::class, 'amizade_id');
    }
}
