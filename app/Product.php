<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'amount', 'unitCost'
    ];

    // $table->increments('id');
    // $table->string('name');
    // $table->integer('amount');
    // $table->double('unitCost');
    // $table->unsignedInteger('user_id');
    // $table->foreign('user_id')->references('id')->on('users');
    // $table->unsignedInteger('supplier_id');
    // $table->foreign('supplier_id')->references('id')->on('suppliers');
    // $table->timestamps();
}
