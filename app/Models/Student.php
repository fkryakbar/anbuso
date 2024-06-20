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
        $answers = Answer::where('u_id', $this->u_id)->get();
        $question_total = Question::where('paket_soal_slug', $slug)->count();;
        $trueAnswers = 0;
        foreach ($answers as $key => $answer) {
            if ($answer->result == 1) {
                $trueAnswers++;
            }
        }
        $progress = round(($answers->count() / $question_total) * 100, 2);
        $score_total = round(($trueAnswers / $question_total) * 100, 2);

        return [
            'score' => $score_total,
            'trueAnswers' => $trueAnswers,
            'questionTotal' => $question_total,
            'progress' => $progress,
            'answeredTotal' => $answers->count()
        ];
    }
}
