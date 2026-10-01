<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'year',
        'duration_minutes',
        'rating',
        'age_rating',
        'language',
        'status',
        'poster_url',
        'backdrop_url',
        'video_url',
        'trailer_url',
        'is_featured',
    ];

    protected function casts(): array
    {
        return [
            'year' => 'integer',
            'duration_minutes' => 'integer',
            'rating' => 'decimal:1',
            'is_featured' => 'boolean',
        ];
    }
}