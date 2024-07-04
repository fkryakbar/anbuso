<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function answers()
    {
        return $this->hasMany(Answer::class, 'question_slug', 'slug');
    }
    public function answer()
    {
        return $this->hasOne(Answer::class, 'question_slug', 'slug');
    }
    protected $casts = [
        'format' => 'json',
    ];
}
