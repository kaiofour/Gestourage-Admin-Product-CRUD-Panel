<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use DB;

class classmate{
    public $fullname;
    public $nickname;
    public $age;
    public $birthdate;
    public $degree;
}

class Student extends Model
{
    function get_classmates($enrolled_courses){
        $size = $enrolled_courses[0]["coursesLength"];
        $all_accounts = DB::table("accounts")
        ->get();
        $response = array();

        for($i=0, $b=0; $i < $size; $i++){
            $currentObj = $enrolled_courses[$i];
            $code = $currentObj["code"];
            $group = $currentObj["group"];
            $schedule = $currentObj["schedule"];
            for ($a=0; $a<sizeof($all_accounts)-1; $a++){
                $associated_courses = $all_accounts[$a]->associated_courses;
                if (str_contains($associated_courses, $code) && str_contains($associated_courses, $group) && str_contains($associated_courses, $schedule) && $all_accounts[$a]->role == "Student"){
                    $temp_obj = new classmate;
                    $temp_obj->fullname = $all_accounts[$a]->fullname;
                    $temp_obj->nickname = $all_accounts[$a]->nickname;
                    $temp_obj->age = $all_accounts[$a]->age;
                    $temp_obj->birthdate = $all_accounts[$a]->birthdate;
                    $temp_obj->degree = $all_accounts[$a]->degree;
                    $response[$b] = $temp_obj; $b++;
                }
            }
        }
        return $response;
    }
    function get_assignments($enrolled_courses){
        $size = $enrolled_courses[0]["coursesLength"];
        $response = array();
        for($i=0; $i < $size; $i++){
            $currentObj = $enrolled_courses[$i];
            $code = $currentObj["code"];
            $group = $currentObj["group"];
            $schedule = $currentObj["schedule"];
            $currentObj = DB::table("assignments")
            ->where("course_code", $code)
            ->where("class_schedule", $schedule)
            ->where("class_group", $group)
            ->get();
            $response[$i] = $currentObj[0];
        }
        return $response;
    }

    function get_assignment_scores(){
        session_start();
        $student_email = $_SESSION["account"][0]->email;
        $response = DB::table('assignment_scores')
        ->where("student_email", $student_email)
        ->get();
        return $response;
    }

    function get_course_schedules($enrolled_courses){
        $size = $enrolled_courses[0]["coursesLength"];
        $response = array();
        for($i=0; $i < $size; $i++){
            $currentObj = $enrolled_courses[$i];
            $code = $currentObj["code"];
            $group = $currentObj["group"];
            $schedule = $currentObj["schedule"];
            $currentObj = DB::table("schedules")
            ->where("course_code", $code)
            ->where("class_schedule", $schedule)
            ->where("class_group", $group)
            ->get();
            $response[$i] = $currentObj[0];
        }
        return $response;
    }
}