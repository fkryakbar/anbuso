<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', 'min:3', 'max:28'],
        ], [
            "name.required" => 'Nama wajib diisi',
            "name.string" => 'Nama nama harus berupa huruf',
            "email.required" => 'Email wajib diisi',
            "email.lowercase" => 'Email harus huruf kecil',
            "email.unique" => 'Email sudah terdaftar',
            "password.required" => 'Password wajib diisi',
            "password.confirmed" => 'Konfirmasi password tidak sama',
            "password.min" => 'Minimal panjang password 3 karakter',
            "password.max" => 'Maksimal panjang password 28 karakter',
        ]);

        $request->mergeIfMissing([
            'role' => 'teacher'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->string('password')),
        ]);



        event(new Registered($user));
        return redirect('/register')->back('success', 'Akun berhasil terdaftar');;
    }
}
