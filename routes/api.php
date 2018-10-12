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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'UserController@index');
Route::post('/', 'UserController@store');
Route::delete('/{id}', 'UserController@destroy');
Route::put('/{id}/edit', 'UserController@update');
Route::get('/user/search/{key}', 'UserController@search');

//Route::group([
//
//    'middleware' => 'api',
//    'namespace' => 'App\Http\Controllers'
//
//], function ($router) {
//
//    Route::post('login', 'AuthController@login');
//    Route::post('logout', 'AuthController@logout');
//    Route::post('refresh', 'AuthController@refresh');
//    Route::post('me', 'AuthController@me');
//
//});

Route::post('/login', 'AuthController@login');
