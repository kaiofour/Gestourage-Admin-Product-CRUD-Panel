<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use DB;

class SecondaryTables extends Model
{   
    function update_secondary_tables(){
        $data = [

        ['specific_career' => 'small / startup', 'name' => 'Other'],
        ['specific_career' => 'progressive / growing', 'name' => 'Other'],
        ['specific_career' => 'progressive / growing', 'name' => 'Other']

        ];

        DB::table('general_fields')->insert($data);
    }

    function autoupdate($general_careers, $specific_careers, $general_fields, $specific_fields){
        $this->update_general_careers($general_careers);
        $this->update_specific_careers($specific_careers);
        $this->update_general_fields($general_fields);
        $this->update_specific_fields($specific_fields);
    }

    function general_careers(){
        return DB::table('general_careers')->where('status', 'active')->orderBy('name', 'asc')->get();
    }

    function get_general_careers(){
        $location = resource_path()."/xml/general_careers.xml";
        $size = filesize($location);

        if ($size == 0){
            return abort(404);
        } else {
            $xml=simplexml_load_file($location);
            $rows = count($xml);
            $response = array();
            
            for ($i=0; $i<$rows; $i++){
                $temp = (object) array(
                    'id' => $i,
                    'name' => (string) $xml->general_career[$i]->name
                );
                $response[$i] = $temp;
            }

            if ($i > 0){
                return $response;
            } else {
                return abort(404);
            }
        }
        
    }

    function update_general_careers($general_careers){
        $file = resource_path()."/xml/general_careers.xml";
        $content = '<?xml version="1.0" encoding="iso-8859-1"?>'."\r\n".'<general_careers>';
        foreach($general_careers as $general_career){
            $content = $content."\r\n\r\n\t".'<general_career>'.
            "\r\n\t\t<name>".Str::lower($general_career->name)."</name>".
            "\r\n\t</general_career>";
        }
        $content = $content."\r\n\r\n".'</general_careers>';
        return file_put_contents($file, $content);
    }

    function specific_careers(){
        return DB::table('specific_careers')->orderBy('name', 'asc')->get();
    }

    function get_specific_careers(){
        $location = resource_path()."/xml/specific_careers.xml";
        $size = filesize($location);

        if ($size == 0){
            return abort(404);
        } else {
            $xml=simplexml_load_file($location);
            $rows = count($xml);
            $response = array();
            
            for ($i=0; $i<$rows; $i++){
                $temp = (object) array(
                    'id' => $i,
                    'name' => (string) $xml->specific_career[$i]->name,
                    'general_career' => (string) $xml->specific_career[$i]->general_career
                );
                $response[$i] = $temp;
            }

            if ($i > 0){
                return $response;
            } else {
                return abort(404);
            }
        }
        
    }

    function update_specific_careers($specific_careers){
        $file = resource_path()."/xml/specific_careers.xml";
        $content = '<?xml version="1.0" encoding="iso-8859-1"?>'."\r\n".'<specific_careers>';
        foreach($specific_careers as $specific_career){
            $content = $content."\r\n\r\n\t".'<specific_career>'.
            "\r\n\t\t<name>".Str::lower($specific_career->name)."</name>".
            "\r\n\t\t<general_career>".Str::lower($specific_career->general_career)."</general_career>".
            "\r\n\t</specific_career>";
        }
        $content = $content."\r\n\r\n".'</specific_careers>';
        return file_put_contents($file, $content);
    }

    function general_fields(){
        return DB::table('general_fields')->orderBy('name', 'asc')->get();
    }

    function get_general_fields(){
        $location = resource_path()."/xml/general_fields.xml";
        $size = filesize($location);

        if ($size == 0){
            return abort(404);
        } else {
            $xml=simplexml_load_file($location);
            $rows = count($xml);
            $response = array();
            
            for ($i=0; $i<$rows; $i++){
                $temp = (object) array(
                    'id' => $i,
                    'name' => (string) $xml->general_field[$i]->name,
                    'specific_career' => (string) $xml->general_field[$i]->specific_career
                );
                $response[$i] = $temp;
            }

            if ($i > 0){
                return $response;
            } else {
                return abort(404);
            }
        }
        
    }

    function update_general_fields($general_fields){
        $file = resource_path()."/xml/general_fields.xml";
        $content = '<?xml version="1.0" encoding="iso-8859-1"?>'."\r\n".'<general_fields>';
        foreach($general_fields as $general_field){
            $content = $content."\r\n\r\n\t".'<general_field>'.
            "\r\n\t\t<name>".Str::lower($general_field->name)."</name>".
            "\r\n\t\t<specific_career>".Str::lower($general_field->specific_career)."</specific_career>".
            "\r\n\t</general_field>";
        }
        $content = $content."\r\n\r\n".'</general_fields>';
        return file_put_contents($file, $content);
    }

    function specific_fields(){
        return DB::table('specific_fields')->orderBy('name', 'asc')->get();
    }

    function get_specific_fields(){
        $location = resource_path()."/xml/specific_fields.xml";
        $size = filesize($location);

        if ($size == 0){
            return abort(404);
        } else {
            $xml=simplexml_load_file($location);
            $rows = count($xml);
            $response = array();
            
            for ($i=0; $i<$rows; $i++){
                $temp = (object) array(
                    'id' => $i,
                    'name' => (string) $xml->specific_field[$i]->name,
                    'general_field' => (string) $xml->specific_field[$i]->general_field
                );
                $response[$i] = $temp;
            }

            if ($i > 0){
                return $response;
            } else {
                return abort(404);
            }
        }
        
    }

    function update_specific_fields($specific_fields){
        $file = resource_path()."/xml/specific_fields.xml";
        $content = '<?xml version="1.0" encoding="iso-8859-1"?>'."\r\n".'<specific_fields>';
        foreach($specific_fields as $specific_field){

            $content = $content."\r\n\r\n\t".'<specific_field>'.
            "\r\n\t\t<name>".Str::lower($specific_field->name)."</name>".
            "\r\n\t\t<general_field>".Str::lower($specific_field->general_field)."</general_field>".
            "\r\n\t</specific_field>";
        }
        $content = $content."\r\n\r\n".'</specific_fields>';
        return file_put_contents($file, $content);
    }

}
