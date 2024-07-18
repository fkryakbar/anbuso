<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index');
    }

    public function tentang()
    {
        return Inertia::render('Home/Tentang');
    }
}
