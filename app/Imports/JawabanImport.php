<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class JawabanImport implements WithMultipleSheets
{
    private $paket_soal_slug;
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }

    public function sheets(): array
    {
        return [
            'Pilihan Ganda' => new JawabanMultipleChoiceImport($this->paket_soal_slug),
            'Esai' => new JawabanEssayImport($this->paket_soal_slug),
        ];
    }
}
