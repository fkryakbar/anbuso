<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketSoalController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/PaketSoal/Index');
    }
}
