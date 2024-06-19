<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaketSoal extends Model
{
    use HasFactory;
    protected $table = 'paket_soal';

    protected $guarded = ['slug', 'user_id'];

    public function questions()
    {
        return $this->hasMany(Question::class, 'paket_soal_slug', 'slug');
    }
}
