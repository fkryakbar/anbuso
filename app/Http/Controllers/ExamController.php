<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\PaketSoal;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ExamController extends Controller
{
    public function index($slug)
    {
        $paketSoal = PaketSoal::where('slug', $slug)->firstOrFail();

        if (session()->has('student')) {
            $u_id = session('student')['u_id'];
            $paketSoal = PaketSoal::where('slug', $slug)->with(['questions' => function ($query) use ($u_id) {
                $query->with(['answer' => function ($query) use ($u_id) {
                    $query->where('u_id', $u_id);
                }]);
            }])->firstOrFail();

            return Inertia::render('Exam/Exam', compact('paketSoal'));
        }


        return Inertia::render('Exam/Index', compact('paketSoal'));
    }


    public function student_register($slug, Request $request)
    {
        $request->validate([
            'name' => 'required|max:50',
            'grade' => 'required|max:50'
        ], [
            'name.required' => 'Nama wajib diisi',
            'grade.required' => 'Kelas wajib diisi',

        ]);
        $paketSoal = PaketSoal::where('slug', $slug)->firstOrFail();

        $request->mergeIfMissing([
            'paket_soal_slug' => $paketSoal->slug,
            'u_id' => Str::random(3) . '-' . Str::random(5)
        ]);

        $student =  Student::create($request->all());
        Session::put('student', $student);

        return back();
    }

    public function save_answer(Request $request, $slug)
    {
        if ($request->session()->has('student')) {
            $request->validate([
                'question_slug' => 'required',
                'answer' => 'required|max:10',
                'result' => 'required',
            ]);
            $request->merge([
                'paket_soal_slug' => $slug,
                'u_id' => $request->session()->get('student')['u_id']
            ]);

            $if_answer_exist = Answer::where('u_id', $request->u_id)->where('question_slug', $request->question_slug)->where('paket_soal_slug', $slug)->first();
            if ($if_answer_exist) {
                $if_answer_exist->update($request->only(['answer', 'result']));
            } else {
                $if_answer_exist = Answer::create($request->all());
            }


            return response([
                'message' => 'Jawaban disimpan',
                'answer' => $if_answer_exist
            ]);
        }

        return response([
            'message' => 'Unauthenticated'
        ], 500);
    }

    public function finished($slug)
    {
        if (session()->has('student')) {
            $u_id = session('student')['u_id'];
            $student = Student::where('u_id', $u_id)->with('answers')->firstOrFail();
            $student_score = $student->score();
            $student->score = $student_score;


            session()->forget('student');

            return Inertia::render('Exam/Finish', compact('student'));
        } else {
            return redirect('/');
        }
    }
}
