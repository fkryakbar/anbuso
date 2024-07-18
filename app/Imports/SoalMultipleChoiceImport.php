<?php

namespace App\Imports;

use App\Models\Question;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;

class SoalMultipleChoiceImport implements ToModel, WithHeadingRow
{
    private $paket_soal_slug;
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }

    public function model(array $row)
    {
        if ($row['konten']) {
            return new Question([
                'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
                'user_id' => Auth::user()->id,
                'paket_soal_slug' => $this->paket_soal_slug,
                'content' => $row['konten'],
                'type' => 'multiple_choice',
                'format' => [
                    'option_a' => $row['a'],
                    'option_b' => $row['b'],
                    'option_c' => $row['c'],
                    'option_d' => $row['d'],
                    'option_e' => $row['e'],
                    'answer_key' => in_array(strtolower($row['kunci_jawaban']), ['a', 'b', 'c', 'd', 'e']) ? strtolower($row['kunci_jawaban']) : 'a',
                ]
            ]);
        }
    }
}
