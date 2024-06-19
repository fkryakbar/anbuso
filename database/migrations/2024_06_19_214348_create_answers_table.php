<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->string('u_id');
            $table->foreign('u_id')->references('u_id')->on('students')->onDelete('cascade');
            $table->string('paket_soal_slug');
            $table->foreign('paket_soal_slug')->references('slug')->on('paket_soal')->onDelete('cascade');
            $table->string('question_slug');
            $table->foreign('question_slug')->references('slug')->on('questions')->onDelete('cascade');
            $table->string('answer');
            $table->boolean('result');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('answers');
    }
};
