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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('user_id');
            $table->string('paket_soal_slug');
            $table->foreign('paket_soal_slug')->references('slug')->on('paket_soal')->onDelete('cascade');
            $table->string('image_path')->nullable();
            $table->longText('content')->nullable();
            $table->string('type')->nullable();
            $table->json('format')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
