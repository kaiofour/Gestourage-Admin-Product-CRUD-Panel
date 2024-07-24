<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use DB;

class Sirton extends Model
{
    function session_check(){
        session_start();
        if (isset($_SESSION["account"])){
            return true;
        }
    }
    function logout(){
        session_start();
        if (isset($_SESSION["account"])){
            session_destroy();
            ob_flush();
            return true;
        }
    }
}