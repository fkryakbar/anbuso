<?php

use App\Http\Controllers\AnalisisController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PaketSoalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SoalController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('register', [RegisterController::class, 'index'])->name('register');
Route::post('register', [RegisterController::class, 'store']);

Route::get('login', [LoginController::class, 'index'])->name('login');
Route::post('login', [LoginController::class, 'login']);

Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => 'auth.teacher', 'prefix' => 'dashboard'], function () {
    Route::get('/paket-soal', [PaketSoalController::class, 'index'])->name('paket-soal');
    Route::post('/paket-soal', [PaketSoalController::class, 'create'])->name('post-paket-soal');
    Route::get('/paket-soal/{slug}', [SoalController::class, 'index'])->name('soal');
    Route::get('/paket-soal/{slug}/delete', [PaketSoalController::class, 'delete']);





    Route::get('/analisis', [AnalisisController::class, 'index'])->name('analisis');
});


// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
