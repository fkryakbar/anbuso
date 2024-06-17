<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PaketSoalController extends Controller
{
    public function index()
    {

        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->orderby('id', 'DESC')->get();

        return Inertia::render('Dashboard/PaketSoal/Index', compact('paketSoal'));
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|max:50|string',
        ], [
            'title.required' => 'Nama Paket soal wajib diisi',
            'title.max' => 'Nama paket soal terlalu panjang',
            'title.string' => 'Nama paket soal harus berupa huruf',
        ]);

        $slug = Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4);

        $request->mergeIfMissing([
            'slug' => $slug,
            'user_id' => Auth::user()->id
        ]);

        PaketSoal::create($request->all());

        return back()->with([
            'success' => 'Paket Soal Berhasil dibuat',
            'data' => [
                'slug' => $slug,
            ]
        ]);
    }

    public function delete($slug)
    {
        $paket_soal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        $paket_soal->delete();

        return back()->with('success', 'Paket Soal Berhasil dihapus');
    }

    public function update($slug, Request $request)
    {
        $request->validate([
            'title' => 'required|max:50|string',
            'show_correct_answer' => 'required',
            'accept_responses' => 'required',
        ]);
        $paketSoal = PaketSoal::where('slug', $slug)->where('user_id', Auth::user()->id)->firstOrFail();

        $paketSoal->update($request->all());

        return back()->with('success', 'Paket Soal berhasil diperbarui');
    }
}
