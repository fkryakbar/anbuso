<?php

namespace App\Imports;

use App\Models\Question;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;


class SoalEssayImport implements ToModel, WithHeadingRow
{
    private $paket_soal_slug;
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }

    public function model(array $row)
    {
        return new Question([
            'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
            'user_id' => Auth::user()->id,
            'paket_soal_slug' => $this->paket_soal_slug,
            'content' => $row['Konten'],
            'type' => 'essay',
            'format' => [
                'bobot' => (int)$row['Bobot'] ?? 10
            ]
        ]);
    }
}
