<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('tasks', 'taskController@index');
Route::get('task/{id}', 'taskController@show');
Route::post('task', 'taskController@store');
Route::put('task/{id}', 'taskController@update');
Route::delete('task/{id}', 'taskController@delete');
