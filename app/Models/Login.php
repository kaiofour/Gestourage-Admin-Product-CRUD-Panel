<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use DB;

class Login extends Model
{
    function get_accounts(){
        return DB::table('accounts')->get();
    }

    function account_authentication($attempt, $token){
        $presaved_token = $token;
        $hashed_token = hash('sha256', $token);
        $ident = $attempt->identification;
        $password = $attempt->password;
        if ($hashed_token == hash('sha256', $presaved_token)){
            $response = DB::table('accounts')
            ->where('email', $ident)
            ->orWhere('id_number', $ident)
            ->get();
            if (sizeof($response) == 1){
                if ($password == $response[0]->password){
                    $response = json_decode($response);
                    $response[sizeof($response)] = $hashed_token;
                    $response[sizeof($response)] = date("Y-m-d");
                    session_start();
                    $_SESSION["account"] = $response;
                    return $response;
                } else {
                    return "Incorrect Password";
                }
            } else {
                return "Invalid Account";
            }
        }
    }

    function get_account(){
        session_start();
        return $_SESSION["account"];
    }
}


