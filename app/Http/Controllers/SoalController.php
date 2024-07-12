<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class SoalController extends Controller
{
    public function index($slug)
    {

        $paketSoal = PaketSoal::where('slug', $slug)->where('user_id', Auth::user()->id)->with('questions')->firstOrFail();

        return Inertia::render('Dashboard/PaketSoal/Soal', compact('paketSoal'));
    }

    public function create(Request $request, $slug)
    {
        $paketSoal = PaketSoal::where('slug', $slug)->where('user_id', Auth::user()->id)->firstOrFail();
        $request->validate([
            'content' => 'required',
            'type' => 'required',
            'bobot' => 'nullable|numeric'
        ], [
            'content.required' => 'Konten Soal Wajib diisi',
            'type.required' => 'Tipe soal wajib dipilih'
        ]);

        if ($request->type == 'multiple_choice') {
            $request->merge([
                'format' => [
                    'option_a' => $request->option_a,
                    'option_b' => $request->option_b,
                    'option_c' => $request->option_c,
                    'option_d' => $request->option_d,
                    'option_e' => $request->option_e,
                    'answer_key' => $request->answer_key,
                ]
            ]);
        } else {
            $request->merge([
                'format' => [
                    'bobot' => (int)$request->bobot ?? 10
                ]
            ]);
        }

        $request->mergeIfMissing([
            'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
            'user_id' => Auth::user()->id,
            'paket_soal_slug' => $paketSoal->slug,
        ]);

        Question::create($request->except(['answer_key', 'option_a', 'option_b', 'option_c', 'option_d', 'option_e', 'bobot']));
        return back();
    }
    public function delete($paket_soal_slug, $slug)
    {
        $question = Question::where('slug', $slug)->where('paket_soal_slug', $paket_soal_slug)->where('user_id', Auth::user()->id)->firstOrFail();

        $question->delete();

        return back();
    }


    public function edit($paket_soal_slug, $slug)
    {
        $paketSoal = PaketSoal::where('slug', $paket_soal_slug)->where('user_id', Auth::user()->id)->with([
            'questions' => function ($query) use ($slug) {
                $query->where('slug', $slug);
            }
        ])->firstOrFail();



        return Inertia::render('Dashboard/PaketSoal/EditSoal', compact('paketSoal'));
    }

    public function update($paket_soal_slug, $slug,  Request $request)
    {
        $request->validate(
            [
                'content' => 'required',
                'type' => 'required',
                'bobot' => 'nullable|numeric'
            ],
            [
                'content.required' => 'Konten Soal Wajib diisi',
                'type.required' => 'Tipe soal wajib dipilih'
            ]
        );

        if ($request->type == 'multiple_choice') {
            $request->merge([
                'format' => [
                    'option_a' => $request->option_a,
                    'option_b' => $request->option_b,
                    'option_c' => $request->option_c,
                    'option_d' => $request->option_d,
                    'option_e' => $request->option_e,
                    'answer_key' => $request->answer_key,
                ]
            ]);
        } else {
            $request->merge([
                'format' => [
                    'bobot' => (int)$request->bobot ?? 10,
                ]
            ]);
        }

        $question = Question::where('slug', $slug)->where('paket_soal_slug', $paket_soal_slug)->where('user_id', Auth::user()->id)->firstOrFail();
        $question->update($request->except(['answer_key', 'option_a', 'option_b', 'option_c', 'option_d', 'option_e', 'bobot']));
        return to_route('soal', [
            'slug' => $paket_soal_slug
        ]);
    }
}
