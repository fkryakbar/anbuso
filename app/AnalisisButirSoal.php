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

            $questionsValidity = [];

            foreach ($container as $key => $cons) {
                $sumTrueAnswer = collect($cons)->sum();
                $correlation_value = null;
                try {
                    $correlation_value =  Stat::correlation($cons, $hasil);
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

                array_push($questionsValidity, [
                    'questionSlug' => $key,
                    'correlationValue' => $correlation_value,
                    'validity' => $validity,
                    'trueAnswerTotalByQuestion' => $sumTrueAnswer
                ]);
            }
            $result = [
                'rTable' => $rTable,
                'studentTotal' => $students->count(),
                'questionTotal' => count($container),
                'questionsValidity' => $questionsValidity,
                'trueAnswerTotalByStudent' => $hasil
            ];
            return $result;
        }

        return null;
    }



    private function reliabilitas($students)
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
            }

            $answers = collect($answers)->groupBy('question_slug');

            $container = $answers->map(function ($answer) {
                $value = [];
                foreach ($answer as $key => $ans) {
                    array_push($value, $ans->result);
                }
                return $value;
            });
            $n = $answers->count();
            $n_1 = $n - 1;
            $rTable = $this->r_table[$students->count() - 2];
            $pvars = collect([]);
            foreach ($container as $key => $cons) {
                $pvar = Stat::pvariance($cons);
                $pvars->push($pvar);
            }
            $pvarsSum = $pvars->sum();
            $pvarsHasil = Stat::pvariance($hasil);
            $rHitung = ($n / $n_1) * (1 - ($pvarsSum / $pvarsHasil));

            $reliabilitas = false;

            if ($rHitung > $rTable) {
                $reliabilitas = true;
            }

            return [
                'reliabilitas' => $reliabilitas,
                'rHitung' => $rHitung,
                'rTable' => $rTable
            ];
        }
        return null;
    }

    private function tingkat_kesukaran($students)
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
            }
            $answers = collect($answers)->groupBy('question_slug');

            $container = $answers->map(function ($answer) {
                $value = [];
                foreach ($answer as $key => $ans) {
                    array_push($value, $ans->result);
                }
                return $value;
            });

            $trueAnswerTotalByQuestion = $container->map(function ($cons) {
                return collect($cons)->sum();
            });

            $studentTotal = $students->count();
            $tingkat_kesukaran = [];


            foreach ($trueAnswerTotalByQuestion as $key => $total) {
                $tingkatValue = $total / $studentTotal;

                $tingkat = 'Sangat Mudah';

                if ($tingkatValue < 0.20) {
                    $tingkat = 'Sangat Sulit';
                } else if ($tingkatValue < 0.40) {
                    $tingkat = 'Sulit';
                } else if ($tingkatValue < 0.60) {
                    $tingkat = 'Sedang';
                } else if ($tingkatValue < 0.90) {
                    $tingkat = 'Mudah';
                }


                array_push($tingkat_kesukaran, [
                    'question_slug' => $key,
                    'value' => $tingkatValue,
                    'category' => $tingkat
                ]);
            }

            return $tingkat_kesukaran;
        }
        return null;
    }

    private function daya_pembeda($students)
    {
        if ($students->count() > 4 && $students->count() <= 30) {
            $students = $students->map(function ($student) {
                $true = $student->answers->sum('result');
                $student = $student->setAttribute('trueAnswer', $true);
                return $student;
            });
            $students = $students->sortByDesc('trueAnswer');
            $groupNumber = floor($students->count() / 2);


            $upperGroup = $students->take($groupNumber);
            $lowerGroup = $students->take(-1 * $groupNumber);
            $middleGroup = null;
            if ($students->count() % 2 != 0) {
                // $middleGroup = $students->splice(round($students->count() / 2) - 1, 1)->first();
                $middleGroup = $students->diffAssoc($upperGroup);
                $middleGroup = $middleGroup->diffAssoc($lowerGroup);
            }
            // dd($middleGroup);

            $upperGroupAnswers = [];
            $lowerGroupAnswers = [];

            foreach ($upperGroup as $key => $student) {
                foreach ($student->answers as $key => $answer) {
                    array_push($upperGroupAnswers, $answer);
                }
            }
            foreach ($lowerGroup as $key => $student) {
                foreach ($student->answers as $key => $answer) {
                    array_push($lowerGroupAnswers, $answer);
                }
            }
            $upperGroupAnswers = collect($upperGroupAnswers)->groupBy('question_slug');
            $lowerGroupAnswers = collect($lowerGroupAnswers)->groupBy('question_slug');

            $upperGroupAnswersAverage = [];
            $lowerGroupAnswersAverage = [];

            foreach ($upperGroupAnswers as $key => $answer) {
                $upperGroupAnswersAverage[$key] =  $answer->avg('result');
            }
            foreach ($lowerGroupAnswers as $key => $answer) {
                $lowerGroupAnswersAverage[$key] =  $answer->avg('result');
            }
            $dayaPembeda = [];
            foreach ($upperGroupAnswersAverage as $key => $upperAverage) {
                $lowerAverage = $lowerGroupAnswersAverage[$key];
                $value =  ($upperAverage - $lowerAverage) / 1;
                $dayaPembeda[$key] = $value;
            }
            $upperGroupArray = [];
            $lowerGroupArray = [];
            $middleGroupArray = [];

            foreach ($upperGroup as $key => $upper) {
                array_push($upperGroupArray, $upper);
            }
            foreach ($lowerGroup as $key => $lower) {
                array_push($lowerGroupArray, $lower);
            }

            if ($middleGroup) {
                foreach ($middleGroup as $key => $middle) {
                    array_push($middleGroupArray, $middle);
                }
            }

            $dayaPembedaData = [
                'upperGroupStudents' => $upperGroupArray,
                'lowerGroupStudents' => $lowerGroupArray,
                'middleGroupStudents' => $middleGroupArray
            ];
            $dayaPembedaByQuestions = [];
            foreach ($dayaPembeda as $key => $value) {
                $category = 'Sangat Baik';
                if ($value <= 0.19) {
                    $category = 'Kurang Baik';
                } else if ($value <= 0.29) {
                    $category = 'Cukup, Perlu Perbaikan';
                } else if ($value <= 0.39) {
                    $category = 'Baik';
                }

                array_push($dayaPembedaByQuestions, [
                    'question_slug' => $key,
                    'value' => $value,
                    'category' => $category,
                ]);
            }
            $dayaPembedaData['dayaPembeda'] = $dayaPembedaByQuestions;
            return $dayaPembedaData;
        }
        return null;
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
