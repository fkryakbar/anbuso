<?php

use App\Http\Controllers\AnalisisController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PaketSoalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SoalController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

if (env('APP_ENV') === 'production') {
    URL::forceScheme('https');
}

Route::get('/', [HomeController::class, 'index']);
Route::get('tentang', [HomeController::class, 'tentang'])->name('tentang');

Route::get('register', [RegisterController::class, 'index'])->name('register');
Route::post('register', [RegisterController::class, 'store']);
Route::post('account', [RegisterController::class, 'update'])->name('account_update');

Route::get('login', [LoginController::class, 'index'])->name('login');
Route::post('login', [LoginController::class, 'login']);

Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => 'auth.teacher', 'prefix' => 'dashboard'], function () {
    Route::get('/paket-soal', [PaketSoalController::class, 'index'])->name('paket-soal');
    Route::post('/paket-soal', [PaketSoalController::class, 'create'])->name('post-paket-soal');
    Route::get('/paket-soal/{slug}', [SoalController::class, 'index'])->name('soal');
    Route::post('/paket-soal/{slug}', [PaketSoalController::class, 'update'])->name('update-paket-soal');
    Route::post('/paket-soal/{slug}/create', [SoalController::class, 'create'])->name('create-question');
    Route::post('/paket-soal/{slug}/upload', [SoalController::class, 'upload'])->name('upload-question');
    Route::get('/paket-soal/{slug}/delete', [PaketSoalController::class, 'delete']);
    Route::get('/paket-soal/{paket_soal_slug}/{slug}', [SoalController::class, 'edit'])->name('edit-soal-page');
    Route::post('/paket-soal/{paket_soal_slug}/{slug}', [SoalController::class, 'update'])->name('update-soal');
    Route::get('/paket-soal/{paket_soal_slug}/{slug}/delete', [SoalController::class, 'delete'])->name('delete-question');

    Route::get('/analisis', [AnalisisController::class, 'index'])->name('analisis');
    Route::get('/analisis/{slug}/summary', [AnalisisController::class, 'summary'])->name('summary');
    Route::post('/analisis/{slug}/summary', [AnalisisController::class, 'updateScore'])->name('updateScore');
    Route::delete('/analisis/{slug}/{u_id}/summary', [AnalisisController::class, 'delete_student'])->name('delete_student');
    Route::get('/analisis/{slug}/detail', [AnalisisController::class, 'detail'])->name('detail');
    Route::get('/analisis/{slug}/download', [AnalisisController::class, 'download'])->name('download_analisis');
});



Route::get('exam/{slug}', [ExamController::class, 'index'])->name('exam');
Route::post('exam/{slug}', [ExamController::class, 'student_register'])->name('student-register');
Route::get('exam/{slug}/finished', [ExamController::class, 'finished'])->name('finished-exam');

Route::post('exam/{slug}/save-answer-multiple-choice', [ExamController::class, 'save_answer_multiple_choice'])->name('save_answer_multiple_choice');
Route::post('exam/{slug}/save-answer-essay', [ExamController::class, 'save_answer_essay'])->name('save_answer_essay');
// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
