<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suppliers extends Model
{
    protected $fillable = [
        'company', 'address1', 'address2', 'postCode', 'city', 'state'
    ];
}
