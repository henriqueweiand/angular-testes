<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $user;
    private $totalPage = 10;

    public function __construct(User $user)
    {
        $this -> user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = $this -> user -> paginate($this -> totalPage);

        return response()->json(['users' => $users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request -> all();

        if(!$insert = $this -> user -> create([
            'nome'     => $data -> nome,
            'email'    => $data -> email,
            'password' => bcrypt($data -> password),
        ])) {
            return response()->json(['error' => 'Erro ao inserir'], 500);
        }

        return response() -> json(['user' => $insert], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!$user = $this -> user -> where('id', $id))
            return response() -> json(['error' => 'not_found'], 404);

        return response() -> json(['user' => $user -> first()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request -> all();

        if(!$user = $this -> user -> where('id', $id))
            return response() -> json(['error' => 'user_not_found'], 500);

        if(!empty($input['password']))
            $input['password'] = bcrypt($input['password']);

        $update = $user -> update($input);
        return response() -> json(['response' => $update]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = $this -> user -> where('id', $id);

        if(!$delete = $user -> delete())
            return response() -> json(['error' => 'user_not_delete'], 500);

        return response() -> json(['response' => $delete]);
    }

    public function getCursos($id)
    {
        if(!$user = $this -> user -> where('id', $id) -> get() -> first())
            return response() -> json(['error' => 'user_not_found'], 500);

        return response() -> json(['cursos' => $user -> cursos]);
    }
}
