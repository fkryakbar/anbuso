<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AnalisisController extends Controller
{
    public function index()
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->orderby('id', 'DESC')->get();
        return Inertia::render('Dashboard/Analisis/Index', compact('paketSoal'));
    }

    public function summary($slug)
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        return Inertia::render('Dashboard/Analisis/Summary', compact('paketSoal'));
    }

    public function detail($slug)
    {
        $paketSoal = PaketSoal::where('user_id', Auth::user()->id)->where('slug', $slug)->firstOrFail();

        return Inertia::render('Dashboard/Analisis/Detail', compact('paketSoal'));
    }
}
