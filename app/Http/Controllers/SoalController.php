<?php

namespace App\Http\Controllers;

use App\Models\PaketSoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function index($slug)
    {

        $paketSoal = PaketSoal::where('slug', $slug)->where('user_id', Auth::user()->id)->firstOrFail();

        return Inertia::render('Dashboard/PaketSoal/Soal', compact('paketSoal'));
    }
}
