<?php

namespace App\Http\Controllers;

use App\Events\PenskoranEvent;
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

    private $usePusher = false;

    public function index($slug)
    {
        $paketSoal = PaketSoal::where('slug', $slug)->with('questions')->firstOrFail();

        if (session()->has('student') && $paketSoal->accept_responses == 1 && Student::where('u_id', session('student')['u_id'])->first()) {
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

        $student = Student::where('paket_soal_slug', $slug)->where('u_id', $student->u_id)->with(['answers' => function ($query) {
            $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                ->orderBy('questions.id', 'ASC')
                ->select('answers.*');
        }])->first();
        $student->result = $student->result($slug);
        PenskoranEvent::dispatch($paketSoal->slug,  $student);

        return back();
    }

    public function save_answer_multiple_choice(Request $request, $slug)
    {

        $paketSoal = PaketSoal::where('slug', $slug)->firstOrFail();

        if ($paketSoal->accept_responses == 0) {
            return response([
                'message' => 'Ujian Telah ditutup'
            ], 403);
        }

        if ($request->session()->has('student')) {
            $request->validate([
                'question_slug' => 'required',
                'answer' => 'required|max:10',
                'score' => 'required',
            ]);
            $request->merge([
                'paket_soal_slug' => $slug,
                'u_id' => $request->session()->get('student')['u_id']
            ]);

            $if_answer_exist = Answer::where('u_id', $request->u_id)->where('question_slug', $request->question_slug)->where('paket_soal_slug', $slug)->first();
            if ($if_answer_exist) {
                $if_answer_exist->update($request->only(['answer', 'score']));
            } else {
                $if_answer_exist = Answer::create($request->all());
            }
            if ($this->usePusher) {
                $student = Student::where('paket_soal_slug', $slug)->where('u_id', $request->u_id)->with(['answers' => function ($query) {
                    $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                        ->orderBy('questions.id', 'ASC')
                        ->select('answers.*', 'questions.type');
                }])->first();
                $student->result = $student->result($slug);
                $student->groupedAnswer = $student->answers->groupBy('type');
                PenskoranEvent::dispatch($paketSoal->slug,  $student);
            }

            return response([
                'message' => 'Jawaban disimpan',
                'answer' => $if_answer_exist
            ]);
        }

        return response([
            'message' => 'Unauthenticated'
        ], 401);
    }
    public function save_answer_essay(Request $request, $slug)
    {

        $paketSoal = PaketSoal::where('slug', $slug)->firstOrFail();

        if ($paketSoal->accept_responses == 0) {
            return response([
                'message' => 'Ujian Telah ditutup'
            ], 403);
        }

        if ($request->session()->has('student')) {
            $request->validate([
                'question_slug' => 'required',
                'answer' => 'required',
                'score' => 'required',
            ]);
            $request->merge([
                'paket_soal_slug' => $slug,
                'u_id' => $request->session()->get('student')['u_id']
            ]);

            $if_answer_exist = Answer::where('u_id', $request->u_id)->where('question_slug', $request->question_slug)->where('paket_soal_slug', $slug)->first();
            if ($if_answer_exist) {
                $if_answer_exist->update($request->only(['answer', 'score']));
            } else {
                $if_answer_exist = Answer::create($request->all());
            }
            if ($this->usePusher) {
                $student = Student::where('paket_soal_slug', $slug)->where('u_id', $request->u_id)->with(['answers' => function ($query) {
                    $query->join('questions', 'answers.question_slug', '=', 'questions.slug')
                        ->orderBy('questions.id', 'ASC')
                        ->select('answers.*', 'questions.type');
                }])->first();
                $student->result = $student->result($slug);
                $student->groupedAnswer = $student->answers->groupBy('type');
                PenskoranEvent::dispatch($paketSoal->slug,  $student);
            }

            return response([
                'message' => 'Jawaban disimpan',
                'answer' => $if_answer_exist
            ]);
        }

        return response([
            'message' => 'Unauthenticated'
        ], 401);
    }

    public function finished($slug)
    {
        $paketSoal = PaketSoal::where('slug', $slug)->firstOrFail();
        if (session()->has('student')) {
            $u_id = session('student')['u_id'];
            $student = Student::where('u_id', $u_id)->with('answers')->firstOrFail();
            $student->result = $student->result($slug);


            session()->forget('student');

            return Inertia::render('Exam/Finish', compact('student', 'paketSoal'));
        } else {
            return redirect('/');
        }
    }
}
