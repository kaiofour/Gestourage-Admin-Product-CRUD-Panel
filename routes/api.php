<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Html\HtmlServiceProvider;
use Illuminate\Http\Response;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
