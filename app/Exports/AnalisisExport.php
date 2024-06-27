<?php

namespace App\Exports;

use App\AnalisisButirSoal;
use App\Models\PaketSoal;
use App\Models\Student;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class AnalisisExport implements FromView, ShouldAutoSize
{
    use AnalisisButirSoal;
    /**
     * @return \Illuminate\Support\Collection
     */
    private $slug;
    public function __construct($slug)
    {
        $this->slug = $slug;
    }

    public function view(): View
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $this->slug)->with('questions')->firstOrFail();
        $students = Student::where('paket_soal_slug', $this->slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();

        foreach ($students as $key => $student) {
            $student->result = $student->result($this->slug);
        }
        $filteredStudents = [];
        foreach ($students as $key => $student) {
            if ($student->answers->count() == $paketSoal->questions->count()) {
                array_push($filteredStudents, $student);
            }
        }

        $filteredStudents = collect($filteredStudents);

        $validity = $this->validitas($filteredStudents);

        $reliabilitas = $this->reliabilitas($filteredStudents);

        $tingkatKesulitan = $this->tingkat_kesukaran($filteredStudents);

        $dayaPembeda = $this->daya_pembeda($filteredStudents);
        // dd($dayaPembeda);

        return view('template.analisis_export', compact('paketSoal', 'students', 'validity', 'filteredStudents', 'reliabilitas', 'tingkatKesulitan', 'dayaPembeda'));
    }
}
