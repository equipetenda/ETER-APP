<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AmigoAvisado extends Model
{
    use HasFactory;

    protected $table = 'amigo_avisado';

    protected $fillable = [
        'amizade_id',
        'vontade_fumar_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function amizade(): BelongsTo
    {
        return $this->belongsTo(Amizade::class, 'amizade_id');
    }

    public function vontadeFumar(): BelongsTo
    {
        return $this->belongsTo(VontadeFumar::class, 'vontade_fumar_id');
    }
}
