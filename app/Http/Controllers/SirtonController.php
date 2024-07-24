<?php

namespace App\Http\Controllers;
use App\Models\Sirton;
use Illuminate\Routing\Controller as Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;

class SirtonController extends Controller
{
    protected function session_check()
    {      
        $sirton = new Sirton();
        return $sirton->session_check();
    }

    protected function logout()
    {      
        $sirton = new Sirton();
        return $sirton->logout();
    }

    protected function get_current_date(){
        $date = date("Y-m-d");
        return date("M j, Y (l)", strtotime($date));
    }
}