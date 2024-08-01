<?php

namespace App\Imports;

use App\Models\Question;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Validators\Failure;

class SoalEssayImport implements ToModel, WithHeadingRow, WithValidation, SkipsOnFailure
{
    use SkipsErrors;
    protected $failures = [];
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
                'type' => 'essay',
                'format' => [
                    'bobot' => (int)$row['bobot'] ?? 10
                ]
            ]);
        }
    }
    public function onFailure(Failure ...$failures)
    {
        $this->failures = array_merge($this->failures, $failures);
    }
    public function rules(): array
    {
        return [
            '*.no' => 'required',
            '*.konten'  => 'required',
            '*.bobot'  => 'required',
        ];
    }
}
