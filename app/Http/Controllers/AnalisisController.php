<?php

namespace App\Http\Controllers;

use App\AnalisisButirSoal;
use App\Exports\AnalisisExport;
use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Question;
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
                ->select('answers.*', 'questions.type');
        }])->get();
        foreach ($students as $key => $student) {
            $student->result = $student->result($slug);
            $student->groupedAnswer = $student->answers->groupBy('type');
        }
        // dd($students);
        return Inertia::render('Dashboard/Analisis/Summary', compact('paketSoal', 'students'));
    }

    public function updateScore($slug, Request $request)
    {
        $request->validate([
            'answer_id' => 'required|numeric',
            'score' => 'required|numeric'
        ]);

        $answer = Answer::where('id', $request->answer_id)->where('paket_soal_slug', $slug)->firstOrFail();
        $answer->update([
            'score' => $request->score
        ]);
        return  to_route('summary', ['slug' => $slug]);
    }

    public function detail($slug)
    {
        $paketSoalMultipleChoice = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with(['questions' => function ($query) {
            $query->where('type', 'multiple_choice');
        }])->firstOrFail();
        $paketSoalEssay = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with(['questions' => function ($query) {
            $query->where('type', 'essay');
        }])->firstOrFail();


        $studentsMultipleChoice = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'multiple_choice')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
        $filteredStudentsMultipleChoice = [];
        foreach ($studentsMultipleChoice as $key => $student) {
            if ($student->answers->count() == $paketSoalMultipleChoice->questions->count()) {
                array_push($filteredStudentsMultipleChoice, $student);
            }
        }

        $filteredStudentsMultipleChoice = collect($filteredStudentsMultipleChoice);
        $validityMultipleChoice = $this->validitas($filteredStudentsMultipleChoice);
        $reliabilitasMultipleChoice = $this->reliabilitas($filteredStudentsMultipleChoice);
        $tingkatKesulitanMultipleChoice = $this->tingkat_kesukaran($filteredStudentsMultipleChoice);
        $dayaPembedaMultipleChoice = $this->daya_pembeda($filteredStudentsMultipleChoice);


        $studentsEssay = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'essay')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
        $filteredStudentsEssay = [];
        foreach ($studentsEssay as $key => $student) {
            if ($student->answers->count() == $paketSoalEssay->questions->count()) {
                array_push($filteredStudentsEssay, $student);
            }
        }

        $filteredStudentsEssay = collect($filteredStudentsEssay);
        $validityEssay = $this->validitas($filteredStudentsEssay);
        $reliabilitasEssay = $this->reliabilitas($filteredStudentsEssay);
        $tingkatKesulitanEssay = $this->tingkat_kesukaran_essay($filteredStudentsEssay);
        $dayaPembedaEssay = $this->daya_pembeda_essay($filteredStudentsEssay);

        // dd($dayaPembedaEssay);



        return Inertia::render('Dashboard/Analisis/Detail', compact(
            'paketSoalMultipleChoice',
            'validityMultipleChoice',
            'filteredStudentsMultipleChoice',
            'reliabilitasMultipleChoice',
            'tingkatKesulitanMultipleChoice',
            'dayaPembedaMultipleChoice',
            'paketSoalEssay',
            'validityEssay',
            'filteredStudentsEssay',
            'reliabilitasEssay',
            'tingkatKesulitanEssay',
            'dayaPembedaEssay'
        ));
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
