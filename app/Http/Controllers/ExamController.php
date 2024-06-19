<?php

namespace App\Http\Controllers;

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
            // dd(session('student'));
            $paketSoal = PaketSoal::where('slug', $slug)->with('questions')->firstOrFail();

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
}
