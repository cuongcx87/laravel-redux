<?php

use Illuminate\Http\Request;

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

Route::get('/', 'UserController@index')->name('index');
Route::post('/', 'UserController@store')->name('store');
Route::delete('/{id}', 'UserController@destroy')->name('destroy');
Route::put('/{id}/edit', 'UserController@update')->name('update');
Route::get('/user/search/{key}', 'UserController@search')->name('search');

Route::post('/login', 'AuthController@login')->name('login');
//Route::post('/logout', 'AuthController@logout')->name('logout');
Route::group([

    'middleware' => 'api',
    'namespace' => '\App\Http\Controllers'

], function ($router) {

    Route::post('logout', 'AuthController@logout')->name('logout');
    Route::post('refresh', 'AuthController@refresh')->name('refresh');
    Route::post('me', 'AuthController@me')->name('me');

});