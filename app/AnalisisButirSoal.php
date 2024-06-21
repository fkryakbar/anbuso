<?php

namespace App;

use App\Models\Answer;
use HiFolks\Statistics\Stat;

trait AnalisisButirSoal
{
    private function validitas($students)
    {
        if ($students->count() > 4) {
            $hasil = [];
            $answers = [];
            foreach ($students as $key => $student) {
                $trueAnswers = 0;
                foreach ($student->answers as $key => $answer) {
                    if ($answer->result == 1) {
                        $trueAnswers++;
                    }
                }
                array_push($hasil, $trueAnswers);
                foreach ($student->answers as $key => $answer) {
                    array_push($answers, $answer);
                }

                // dd($student->answers);
            }

            $answers = collect($answers)->groupBy('question_slug');

            $container = $answers->map(function ($answer) {
                $value = [];
                foreach ($answer as $key => $ans) {
                    array_push($value, $ans->result);
                }
                return $value;
            });
            $rTable = $this->r_table[$students->count() - 2];
            // dd($rTable);
            $container = $container->mapWithKeys(function ($result, $key) use ($hasil, $rTable) {
                $sumTrueAnswer = collect($result)->sum();
                // dd($sumTrueAnswer);
                $correlation_value = null;
                try {
                    $correlation_value =  Stat::correlation($result, $hasil);
                } catch (\Throwable $th) {
                }

                $validity = 'Tidak dapat dihitung';

                if ($correlation_value) {
                    if ($correlation_value > $rTable) {
                        $validity = true;
                    } else {
                        $validity = false;
                    }
                }


                return [$key => [
                    'correlationValue' => $correlation_value,
                    'validity' => $validity,
                    'trueAnswerTotal' => $sumTrueAnswer
                ]];
            });
            $result = [
                'rTable' => $rTable,
                'studentTotal' => $students->count(),
                'questionTotal' => count($container),
                'questionsValidity' => $container
            ];
            return $result;
        }

        return null;
        // dd($container);
    }



    private function realibilitas()
    {
    }



    private function daya_pembenda()
    {
    }



    private function tingkat_kesukaran()
    {
    }

    private function analyze()
    {
    }
    private $r_table = [
        1 => 0.9969,
        2 => 0.9500,
        3 => 0.8783,
        4 => 0.8114,
        5 => 0.7545,
        6 => 0.7067,
        7 => 0.6664,
        8 => 0.6319,
        9 => 0.6021,
        10 => 0.5760,
        11 => 0.5529,
        12 => 0.5324,
        13 => 0.5140,
        14 => 0.4973,
        15 => 0.4821,
        16 => 0.4683,
        17 => 0.4555,
        18 => 0.4438,
        19 => 0.4329,
        20 => 0.4227,
        21 => 0.4132,
        22 => 0.4044,
        23 => 0.3961,
        24 => 0.3882,
        25 => 0.3809,
        26 => 0.3739,
        27 => 0.3673,
        28 => 0.3610,
        29 => 0.3550,
        30 => 0.3494,
        31 => 0.3440,
        32 => 0.3388,
        33 => 0.3338,
        34 => 0.3291,
        35 => 0.3246,
        36 => 0.3202,
        37 => 0.3160,
        38 => 0.3120,
        39 => 0.3081,
        40 => 0.3044,
        41 => 0.3008,
        42 => 0.2973,
        43 => 0.2940,
        44 => 0.2907,
        45 => 0.2876,
        46 => 0.2845,
        47 => 0.2816,
        48 => 0.2787,
        49 => 0.2759,
        50 => 0.2732,
    ];
}
