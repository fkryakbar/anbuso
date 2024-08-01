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
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Validators\Failure;

class JawabanEssayImport implements ToCollection, WithHeadingRow, WithValidation, SkipsOnFailure
{

    use SkipsErrors;
    private $paket_soal_slug;

    protected $answerTotal = 0;
    protected $siswaTotal = 0;
    protected $failures = [];
    public function __construct($paket_soal_slug)
    {
        $this->paket_soal_slug = $paket_soal_slug;
    }
    public function collection(Collection $rows)
    {
        $paketSoal = PaketSoal::where('slug', $this->paket_soal_slug)->with(['questions' => function ($query) {
            $query->where('type', 'essay');
        }])->firstOrFail();

        $siswa = $rows->groupBy('siswa');
        $siswa->each(function ($answer, $key) use ($paketSoal) {
            $checkStudent = Student::where('name', $key)->where('paket_soal_slug', $paketSoal->slug)->first();
            if ($checkStudent) {
                $u_id = $checkStudent->u_id;
            } else {
                $u_id = Str::random(3) . '-' . Str::random(5);
                $this->siswaTotal++;
                $student = Student::create([
                    'u_id' => $u_id,
                    'paket_soal_slug' => $paketSoal->slug,
                    'name' => $key,
                    'grade' => 'Analisis Butir Soal',

                ]);
            }

            $paketSoal->questions->each(function ($question, $key) use ($answer, $u_id) {
                if (isset($answer[$key])) {
                    $this->answerTotal++;
                    Answer::create([
                        'u_id' => $u_id,
                        'paket_soal_slug' => $question->paket_soal_slug,
                        'question_slug' => $question->slug,
                        'answer' => 'Null',
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
            '*.poin'  => 'required|numeric',
        ];
    }
    public function onFailure(Failure ...$failures)
    {
        $this->failures = array_merge($this->failures, $failures);
    }

    public function getFailures()
    {
        return $this->failures;
    }

    public function getAnswerTotal()
    {
        return $this->answerTotal;
    }
    public function getSiswaTotal()
    {
        return $this->siswaTotal;
    }
}
