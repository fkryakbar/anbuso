<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketSoal extends Model
{
    use HasFactory;
    protected $table = 'paket_soal';

    protected $guarded = [];

    public function questions()
    {
        return $this->hasMany(Question::class, 'paket_soal_slug', 'slug');
    }

    public function students()
    {
        return $this->hasMany(Student::class, 'paket_soal_slug', 'slug');
    }
}
