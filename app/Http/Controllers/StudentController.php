<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Routing\Controller as Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;

class StudentController extends Controller
{  
    protected function get_assignments(Request $enrolled_courses)
    {      
        $student = new Student();
        return $student->get_assignments($enrolled_courses);
    }
    protected function get_classmates(Request $enrolled_courses)
    {      
        $student = new Student();
        return $student->get_classmates($enrolled_courses);
    }
    protected function get_assignment_scores()
    {      
        $student = new Student();
        return $student->get_assignment_scores();
    }
    protected function get_course_schedules(Request $enrolled_courses)
    {      
        $student = new Student();
        return $student->get_course_schedules($enrolled_courses);
    }
}