<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function answers()
    {
        return  $this->hasMany(Answer::class, 'u_id', 'u_id');
    }

    public function result($slug)
    {
        $answers = Answer::where('u_id', $this->u_id)->with('question')->get();
        $question_total = Question::where('paket_soal_slug', $slug)->count();
        $trueAnswers = 0;
        foreach ($answers as $key => $answer) {
            $trueAnswers += $answer->score;
            // if ($answer->score == 1 && $answer->question->type == 'multiple_choice') {
            // }
        }
        $progress = round(($answers->count() / $question_total) * 100, 2);
        // $score_total = round(($trueAnswers / $question_total) * 100, 2);
        $score_total = $trueAnswers;

        return [
            'score' => $score_total,
            'trueAnswers' => $trueAnswers,
            'questionTotal' => $question_total,
            'progress' => $progress,
            'answeredTotal' => $answers->count()
        ];
    }
}
