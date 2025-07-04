<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genero extends Model
{
    use HasFactory;

    protected $table = 'genero';

    protected $fillable = [
        'nome'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function user():HasMany
    {
        return $this->hasMany(User::class);
    }
}
