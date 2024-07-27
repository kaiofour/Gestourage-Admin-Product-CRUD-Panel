<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    session_start();
    if(isset($_SESSION["account"])){
        return redirect('/home');
    } else {
        return view('Login');
    }
});

Route::get('/images/{filename}', function($filename){
    $path = resource_path().'/views/images/'.$filename;
    if(!File::exists($path)) {
        return abort(404);
    }
    $file = File::get($path);
    $type = File::mimeType($path);
    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);
    return $response;
});

Route::post('/register/registration', [RegistrationController::class, 'registration']);
Route::post('/login/authentication', [LoginController::class, 'authentication']);
Route::get('/get_accounts', [LoginController::class, 'get_accounts']);

// Module 8 starts here
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login'])->name('login.submit');

// Admin login routes
Route::get('admin/admin_login', [AdminController::class, 'showLoginForm'])->name('admin.login');
Route::post('admin/admin_login', [AdminController::class, 'login'])->name('admin.login.submit');
Route::get('admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
Route::get('admin/logout', [AdminDashboardController::class, 'logout'])->name('admin.logout');

Route::resource('/products', ProductController::class)->except(['show']);

// Admin dashboard and authenticated routes
Route::middleware('auth:admin')->group(function () {
    Route::get('admin/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('admin/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('admin/products/{id}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('admin/products/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('admin/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('admin/products/create', function() {
        return 'Create route hit';
    });

    Route::post('admin/products', function() {
        return 'Store route hit';
    });

    Route::get('admin/products/{id}/edit', function($id) {
        return 'Edit route hit: ' . $id;
    });

    Route::put('admin/products/{id}', function($id) {
        return 'Update route hit: ' . $id;
    });

    Route::delete('admin/products/{id}', function($id) {
        return 'Destroy route hit: ' . $id;
    });
});





