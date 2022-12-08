<?php

use Illuminate\Http\Request;

/*php
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Resources(['user'=>'API\UserController']);

Route::get('dashboard', 'API\DashboardController@index');
Route::get('sales', 'API\SalesController@index');
Route::get('total', 'API\TotalSalesController@index');

