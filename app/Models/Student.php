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

    public function score()
    {
        $answers = Answer::where('u_id', $this->u_id)->get();
        // dd($this->u_id);
        $question_total = count($answers);
        $trueAnswers = 0;
        foreach ($answers as $key => $answer) {
            if ($answer->result == 1) {
                $trueAnswers++;
            }
        }

        $score_total = round(($trueAnswers / $question_total) * 100, 2);

        return $score_total;
    }
}
