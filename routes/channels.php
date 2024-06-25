<?php

use App\Models\PaketSoal;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('Penskoran.{slug}', function (User $user, $slug) {
    return $user->id === PaketSoal::where('slug', $slug)->first()->user_id;
});
