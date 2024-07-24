<?php

namespace App\Http\Controllers;
use App\Models\Login;
use Illuminate\Routing\Controller as Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;

class LoginController extends Controller
{
    protected function authentication(Request $request)
    {      
        $login = new Login();
        $token = Str::random(60);
        return $response = $login->account_authentication($request, $token);
    }

    protected function get_accounts(){
        $login = new Login();
        return $login->get_accounts();
    } 

    protected function account_details()
    {      
        $login = new Login();
        return $response = $login->get_account();
    }
}