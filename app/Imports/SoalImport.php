<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class SoalImport implements WithMultipleSheets
{
    private $paket_soal_slug;
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }

    public function sheets(): array
    {
        return [
            'Pilihan Ganda' => new SoalMultipleChoiceImport($this->paket_soal_slug),
            'Esai' => new SoalEssayImport($this->paket_soal_slug),
        ];
    }
}
