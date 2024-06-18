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
            'answer_key' => 'required'
        ], [
            'content.required' => 'Konten Soal Wajib diisi',
            'answer_key.required' => 'Kunci jawaban wajib disi'
        ]);


        $request->mergeIfMissing([
            'slug' => Str::random(5) . '-' . Str::random(5) . '-' . Str::random(5),
            'user_id' => Auth::user()->id,
            'paket_soal_slug' => $paketSoal->slug,
        ]);

        Question::create($request->all());
        return back();
    }
    public function delete($paket_soal_slug, $slug)
    {
        $question = Question::where('slug', $slug)->where('paket_soal_slug', $paket_soal_slug)->where('user_id', Auth::user()->id)->firstOrFail();

        $question->delete();

        return back();
    }
}
