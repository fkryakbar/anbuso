<?php

namespace App\Http\Controllers;

use App\AnalisisButirSoal;
use App\Exports\AnalisisExport;
use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Student;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class AnalisisController extends Controller
{

    use AnalisisButirSoal;

    public function index()
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->with('students')->orderBy('id', 'DESC')->get();

        return Inertia::render('Dashboard/Analisis/Index', compact('paketSoal'));
    }

    public function summary($slug)
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with('questions')->firstOrFail();
        $students = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();

        foreach ($students as $key => $student) {
            $student->result = $student->result($slug);
        }
        return Inertia::render('Dashboard/Analisis/Summary', compact('paketSoal', 'students'));
    }

    public function detail($slug)
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with('questions')->firstOrFail();

        $answers = Answer::where('paket_soal_slug', $slug)->get();

        $students = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
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
        return Inertia::render('Dashboard/Analisis/Detail', compact('paketSoal', 'validity', 'filteredStudents', 'reliabilitas', 'tingkatKesulitan', 'dayaPembeda'));
    }

    public function delete_student($slug, $u_id)
    {
        PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        $student = Student::where('paket_soal_slug', $slug)->where('u_id', $u_id)->firstOrFail();

        $student->delete();

        return back();
    }

    public function download($slug)
    {
        PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        return Excel::download(new AnalisisExport($slug), 'Analisis.xlsx');
    }
}
