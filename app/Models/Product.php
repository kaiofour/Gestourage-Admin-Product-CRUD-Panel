<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'prodID';
    public $incrementing = true;
    public $timestamps = false; // Disable automatic timestamps

    protected $fillable = [
        'prodName', 'prodDesc', 'prodImageURL', 'prodLastModified',
    ];
}
