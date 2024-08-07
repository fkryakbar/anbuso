<?php

namespace App\Imports;

use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Student;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\WithValidation;

class JawabanMultipleChoiceImport implements ToCollection, WithHeadingRow, WithValidation
{

    use SkipsErrors;

    private $paket_soal_slug;
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }
    public function collection(Collection $rows)
    {
        $paketSoal = PaketSoal::where('slug', $this->paket_soal_slug)->with(['questions' => function ($query) {
            $query->where('type', 'multiple_choice');
        }])->firstOrFail();

        $siswa = $rows->groupBy('siswa');
        $siswa->each(function ($answer, $key) use ($paketSoal) {
            $checkStudent = Student::where('name', $key)->where('paket_soal_slug', $paketSoal->slug)->first();
            if ($checkStudent) {
                $u_id = $checkStudent->u_id;
            } else {
                $u_id = Str::random(3) . '-' . Str::random(5);
                $student = Student::create([
                    'u_id' => $u_id,
                    'paket_soal_slug' => $paketSoal->slug,
                    'name' => $key,
                    'grade' => 'Analisis Butir Soal',

                ]);
            }

            $paketSoal->questions->each(function ($question, $key) use ($answer, $u_id) {
                if (isset($answer[$key])) {
                    Answer::create([
                        'u_id' => $u_id,
                        'paket_soal_slug' => $question->paket_soal_slug,
                        'question_slug' => $question->slug,
                        'answer' => strtolower($answer[$key]['jawaban']),
                        'score' => $answer[$key]['poin'],
                    ]);
                }
            });
        });
    }
    public function rules(): array
    {
        return [
            '*.no_soal' => 'required',
            '*.siswa'  => 'required',
            '*.jawaban'  => 'required',
            '*.poin'  => 'required|numeric',
        ];
    }
}
