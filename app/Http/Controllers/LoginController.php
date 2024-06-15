<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'max:28'],
        ], [
            "email.required" => 'Email wajib diisi',
            "email.email" => 'Email harus email yang valid',
            "password.required" => 'Password wajib diisi',
            "password.max" => 'Maksimal panjang password 28 karakter',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended(route('paket-soal'));
        }

        return back()->withErrors([
            'email' => 'Akun tidak terdaftar atau email dan password salah',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
