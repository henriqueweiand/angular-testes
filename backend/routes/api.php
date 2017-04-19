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

Route::group(['prefix' => 'v1'], function () {

    Route::post('auth', 'Auth\AuthApiController@authenticate');
    Route::post('auth-refresh', 'Auth\AuthApiController@refreshToken');

    Route::get('user/{id}/cursos', 'UserController@getCursos');
    Route::get('curso/{id}/alunos', 'CursoController@getAlunos');

    Route::resource('curso', 'CursoController', ['except' => ['create', 'edit']]);
    Route::resource('user', 'UserController', ['except' => ['create', 'edit']]);

    Route::group(['middleware' => 'jwt.auth'], function () {
        // Rotas autenticadas com JWT
    });

});