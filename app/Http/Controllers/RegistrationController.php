<?php

namespace App\Http\Controllers;
use App\Models\Registration;
use Illuminate\Routing\Controller as Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;

class RegistrationController extends Controller
{
    protected function registration(Request $request)
    {
        $registration = new Registration();
        $response = $registration->create_account($request);
        return $response;
    }
    protected function validate_credentials(Request $request)
    {      
        $registration = new Registration();
        $token = Str::random(60);
        $response = $registration->credentials_validation($request, $token);
        return $response;
    }

    protected function process(Request $request){
        $registration = new Registration();
        $response = $registration->complete_registration($request);
        return $response;
    }
}