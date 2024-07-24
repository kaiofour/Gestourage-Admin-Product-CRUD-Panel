<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use DB;

class Registration extends Model
{
    function create_account($user_credentials){
        return DB::table('users')->insert([
            'email' => $user_credentials->email,
            'password' => $user_credentials->password]);
    
        }

    function credentials_validation($account, $token){
        $presaved_token = $token;
        $hashed_token = hash('sha256', $token);
        $username = $account->username;
        $email = $account->email;
        $mobile = $account->mobile_number;
        $dial_code = $account->dial_code;
        $dialcode_mobile = $dial_code.$mobile;
        $database_response = array();
        if ($hashed_token == hash('sha256', $presaved_token)){
            $single_database_call = DB::table('accounts')
            ->where('username', $username)
            ->orWhere('email', $email)
            ->orWhere('contact_number', $mobile)
            ->orWhere('contact_number', $dialcode_mobile)
            ->get();
            $database_response = json_decode($single_database_call);
        }
        $database_response[sizeof($database_response)] = $hashed_token;
        $database_response[sizeof($database_response)] = date("Y-m-d");
        return $database_response;
    }

    function complete_registration($account){
        $presaved_token = $account->token;
        $database_response = false;
        $username = $account->username;
        $password = $account->password;
        $email = $account->email;
        $dial_code = $account->dial_code;
        $mobile = $dial_code.$account->mobile_number;
        $country_code = $account->country_code;
        $creative_identity = $account->creative_identity;
        $focus = $account->focus;
        $firstname = $account->firstname;
        $lastname = $account->lastname;
        $birthdate = $account->birthdate;
        $gender_identity = $account->gender_identity;
        $gender_expression = $account->gender_expression;
        $sex_assigned_at_birth = $account->sex_assigned_at_birth;
        $sexual_orientation = $account->sexual_orientation;
        $gender_transparency = $account->gender_transparency;
        $address1 = $account->address1;
        $address2 = $account->address2;
        $city = $account->city;
        $state = $account->state;
        $country = $account->country;
        $postal_code = $account->postal_code;
        $registration_signature = $account->registration_signature;
        if ($presaved_token == $account->token){
            $database_response = DB::table('accounts')->insertGetId([
                'username' => $username,
                'password' => $password,
                'firstname' => $firstname,
                'middlename' => null,
                'lastname' => $lastname,
                'email' => $email,
                'contact_number' => $mobile,
                'dial_code' => $dial_code,
                'country_code' =>$country_code,
                'role' => 'Customer',
                'position' => null,
                'team' => null,
                'department' => null,
                'creative_identity' => $creative_identity,
                'focus' => $focus,
                'secondary_professions' => null,
                'birthdate' => $birthdate,
                'gender_identity' => $gender_identity,
                'gender_expression' => $gender_expression,
                'sex_assigned_at_birth' => $sex_assigned_at_birth,
                'sexual_orientation' => $sexual_orientation,
                'gender_transparency' => $gender_transparency,
                'address1' => $address1,
                'address2' => $address2,
                'city' => $city,
                'state' => $state,
                'country' => $country,
                'zipcode' => $postal_code,
                'registration_signature' => $registration_signature
            ]);
        }
        return $database_response;
    }
}