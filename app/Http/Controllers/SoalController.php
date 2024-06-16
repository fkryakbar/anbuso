<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SoalController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/PaketSoal/Soal/Index');
    }
}
