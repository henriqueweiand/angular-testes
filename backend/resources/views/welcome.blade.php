<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div>

            <h3>Rotas default</h3>

            <code>
                <h4>Rotas sem autenticacao</h4>

                Route::post('auth', 'Auth\AuthApiController@authenticate');<br>
                Route::post('auth-refresh', 'Auth\AuthApiController@refreshToken');<br>
                <br>
                Route::get('user/{id}/cursos', 'UserController@getCursos');<br>
                Route::get('curso/{id}/alunos', 'CursoController@getAlunos');<br>
                <br>
                Route::resource('curso', 'CursoController', ['except' => ['create', 'edit']]);<br>
                Route::resource('user', 'UserController', ['except' => ['create', 'edit']]);<br>
                <br>

                <h4>Rotas com autenticacao</h4>

                Route::group(['middleware' => 'jwt.auth'], function () {<br>
                &nbsp;&nbsp;&nbsp;// Rotas autenticadas com JWT<br>
                });<br>
            </code>

        </div>
    </body>
</html>
