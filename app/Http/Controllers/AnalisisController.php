<?php

namespace App\Http\Controllers;

use App\AnalisisButirSoal;
use App\Exports\AnalisisExport;
use App\Imports\JawabanImport;
use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Question;
use App\Models\Student;
use Illuminate\Support\Str;
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

    public function detail($slug, Request $request)
    {
        $paketSoalMultipleChoice = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with(['questions' => function ($query) {
            $query->where('type', 'multiple_choice');
        }])->firstOrFail();
        $paketSoalEssay = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->with(['questions' => function ($query) {
            $query->where('type', 'essay');
        }])->firstOrFail();


        $multipleChoiceQuestionsId = Question::where('paket_soal_slug', $slug)->where('type', 'multiple_choice')->get()->pluck('id');
        if ($request->multipleChoice) {
            $multipleChoiceQuestionsId = collect($request->multipleChoice)->map(function ($item) {
                return (int) $item;
            });
        }

        $studentsMultipleChoice = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) use ($multipleChoiceQuestionsId) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'multiple_choice')->whereIn('questions.id', $multipleChoiceQuestionsId)
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();

        $filteredStudentsMultipleChoice = [];
        foreach ($studentsMultipleChoice as $key => $student) {
            if ($student->answers->count() == $paketSoalMultipleChoice->questions->count() || $student->answers->count() == $multipleChoiceQuestionsId->count()) {
                array_push($filteredStudentsMultipleChoice, $student);
            }
        }

        $filteredStudentsMultipleChoice = collect($filteredStudentsMultipleChoice);
        $validityMultipleChoice = $this->validitas($filteredStudentsMultipleChoice);
        $reliabilitasMultipleChoice = $this->reliabilitas($filteredStudentsMultipleChoice);
        $tingkatKesulitanMultipleChoice = $this->tingkat_kesukaran($filteredStudentsMultipleChoice);
        $dayaPembedaMultipleChoice = $this->daya_pembeda($filteredStudentsMultipleChoice);



        $essayQuestionsId = Question::where('paket_soal_slug', $slug)->where('type', 'essay')->get()->pluck('id');
        if ($request->essay) {
            $essayQuestionsId = collect($request->essay)->map(function ($item) {
                return (int) $item;
            });
        }
        $studentsEssay = Student::where('paket_soal_slug', $slug)->with(['answers' => function ($query) use ($essayQuestionsId) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'essay')->whereIn('questions.id', $essayQuestionsId)
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();



        $filteredStudentsEssay = [];
        foreach ($studentsEssay as $key => $student) {
            if ($student->answers->count() == $paketSoalEssay->questions->count() || $student->answers->count() == $essayQuestionsId->count()) {
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
            'dayaPembedaEssay',
            'essayQuestionsId',
            'multipleChoiceQuestionsId'
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

    public function upload(Request $request)
    {
        // validate title and file for excel 
        $request->validate([
            'title' => 'required|max:50|string',
            'file' => 'required|mimes:xls,xlsx',
            'multiple_choice_total' => 'required|numeric',
            'essay_total' => 'required|numeric'
        ], [
            'title.required' => 'Judul wajib diisi',
            'file.required' => 'File wajib diupload',
            'file.mimes' => 'File harus berupa xls atau xlsx',
            'multiple_choice_total.required' => 'Total soal pilihan ganda wajib diisi',
            'multiple_choice_total.numeric' => 'Total soal pilihan ganda harus berupa angka',
            'essay_total.required' => 'Total soal esai wajib diisi',
            'essay_total.numeric' => 'Total soal esai harus berupa angka'
        ]);


        $userId = Auth::user()->id;
        $paketSoalSlug = Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4);
        $paketSoal = PaketSoal::create([
            'title' => $request->title,
            'slug' => $paketSoalSlug,
            'user_id' => $userId,
            'accept_responses' => false,
        ]);

        for ($i = 0; $i < $request->multiple_choice_total; $i++) {
            Question::create([
                'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
                'user_id' => $userId,
                'paket_soal_slug' => $paketSoalSlug,
                'type' => 'multiple_choice',
                'content' => 'Pertanyaan Pilihan Ganda Nomor ' . ($i + 1),
                'format' => [
                    'option_a' => 'A',
                    'option_b' => 'B',
                    'option_c' => 'C',
                    'option_d' => 'D',
                    'option_e' => 'E',
                    'answer_key' => 'a',
                ]
            ]);
        }

        for ($j = 0; $j < $request->essay_total; $j++) {
            Question::create([
                'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
                'user_id' => $userId,
                'paket_soal_slug' => $paketSoalSlug,
                'type' => 'essay',
                'content' => 'Pertanyaan Esai Nomor ' . ($j + 1),
                'format' => [
                    'bobot' => 10
                ]
            ]);
        }

        Excel::import(new JawabanImport($paketSoalSlug), $request->file('file'));
    }
}
