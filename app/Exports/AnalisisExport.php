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
    private $multipleChoiceQuestionsId;
    private $essayQuestionsId;

    public function __construct($slug, $multipleChoiceQuestionsId, $essayQuestionsId)
    {
        $this->slug = $slug;
        $this->multipleChoiceQuestionsId = $multipleChoiceQuestionsId;
        $this->essayQuestionsId = $essayQuestionsId;
    }

    public function view(): View
    {
        $paketSoalMultipleChoice = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $this->slug)->with(['questions' => function ($query) {
            $query->where('type', 'multiple_choice');
        }])->firstOrFail();
        $paketSoalEssay = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $this->slug)->with(['questions' => function ($query) {
            $query->where('type', 'essay');
        }])->firstOrFail();


        $studentsMultipleChoice = Student::where('paket_soal_slug', $this->slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'multiple_choice')->whereIn('questions.id', $this->multipleChoiceQuestionsId)
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
        $filteredStudentsMultipleChoice = [];
        foreach ($studentsMultipleChoice as $key => $student) {
            if ($student->answers->count() == $paketSoalMultipleChoice->questions->count() || $student->answers->count() == $this->multipleChoiceQuestionsId->count()) {
                array_push($filteredStudentsMultipleChoice, $student);
            }
        }

        $filteredStudentsMultipleChoice = collect($filteredStudentsMultipleChoice);
        $validityMultipleChoice = $this->validitas($filteredStudentsMultipleChoice);
        $reliabilitasMultipleChoice = $this->reliabilitas($filteredStudentsMultipleChoice);
        $tingkatKesulitanMultipleChoice = $this->tingkat_kesukaran($filteredStudentsMultipleChoice);
        $dayaPembedaMultipleChoice = $this->daya_pembeda($filteredStudentsMultipleChoice);
        $dayaPengecohMultipleChoice = $this->daya_pengecoh($filteredStudentsMultipleChoice);

        $studentsEssay = Student::where('paket_soal_slug', $this->slug)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')->where('questions.type', 'essay')->whereIn('questions.id', $this->essayQuestionsId)
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->get();
        $filteredStudentsEssay = [];
        foreach ($studentsEssay as $key => $student) {
            if ($student->answers->count() == $paketSoalEssay->questions->count() || $student->answers->count() == $this->essayQuestionsId->count()) {
                array_push($filteredStudentsEssay, $student);
            }
        }

        $filteredStudentsEssay = collect($filteredStudentsEssay);
        $validityEssay = $this->validitas($filteredStudentsEssay);
        $reliabilitasEssay = $this->reliabilitas($filteredStudentsEssay);
        $tingkatKesulitanEssay = $this->tingkat_kesukaran($filteredStudentsEssay);
        $dayaPembedaEssay = $this->daya_pembeda_essay($filteredStudentsEssay);

        $multipleChoiceQuestionsId = $this->multipleChoiceQuestionsId->toArray();
        $essayQuestionsId = $this->essayQuestionsId->toArray();
        return view('template.analisis_export', compact(
            'paketSoalMultipleChoice',
            'validityMultipleChoice',
            'filteredStudentsMultipleChoice',
            'reliabilitasMultipleChoice',
            'tingkatKesulitanMultipleChoice',
            'dayaPembedaMultipleChoice',
            'dayaPengecohMultipleChoice',
            'paketSoalEssay',
            'validityEssay',
            'filteredStudentsEssay',
            'reliabilitasEssay',
            'tingkatKesulitanEssay',
            'dayaPembedaEssay',
            'multipleChoiceQuestionsId',
            'essayQuestionsId'
        ));
    }
}
