<?php

namespace App\Http\Controllers;

use App\AnalisisButirSoal;
use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Student;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();
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
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        $answers = Answer::where('paket_soal_slug', $slug)->get();

        $students = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
        $filteredStudent = [];
        foreach ($students as $key => $student) {
            if ($student->answers->count() == $paketSoal->questions->count()) {
                array_push($filteredStudent, $student);
            }
        }

        $filteredStudent = collect($filteredStudent);

        $validity = $this->validitas($filteredStudent);


        return Inertia::render('Dashboard/Analisis/Detail', compact('paketSoal', 'validity'));
    }

    public function delete_student($slug, $u_id)
    {
        PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        $student = Student::where('paket_soal_slug', $slug)->where('u_id', $u_id)->firstOrFail();

        $student->delete();

        return back();
    }
}
