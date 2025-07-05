<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Comentario extends Model
{
    use HasFactory;

    protected $table = 'comentario';

    protected $fillable = [
        'texto',
        'postagem_id',
        'parent_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function postagem(): BelongsTo|null
    {
        return $this->belongsTo(Postagem::class, 'postagem_id');
    }

    public function parent(): BelongsTo|null
    {
        return $this->belongsTo(Comentario::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Comentario::class, 'parent_id');
    }
}
