<?php

namespace App\Http\Controllers;

use App\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    private $curso;
    private $totalPage = 10;

    public function __construct(Curso $curso)
    {
        $this -> curso = $curso;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cursos = $this -> curso -> paginate($this -> totalPage);

        return response()->json(['curso' => $cursos]);
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

        if(!$insert = $this -> curso -> create([
            'nome' => $data['nome'],
        ])) {
            return response()->json(['error' => 'Erro ao inserir'], 500);
        }

        return response() -> json(['curso' => $insert], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!$curso = $this -> curso -> where('id', $id))
            return response() -> json(['error' => 'not_found'], 404);

        return response() -> json(['curso' => $curso -> first()]);
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
        unset($input['id']);

        if(!$curso = $this -> curso -> where('id', $id))
            return response() -> json(['error' => 'curso_not_found'], 500);

        $update = $curso -> update($input);
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
        $curso = $this -> curso -> where('id', $id);

        if(!$delete = $curso -> delete())
            return response() -> json(['error' => 'curso_not_delete'], 500);

        return response() -> json(['response' => $delete]);
    }

    public function getAlunos($id)
    {
        if(!$curso = $this -> curso -> where('id', $id) -> get() -> first())
            return response() -> json(['error' => 'curso_not_found'], 500);

        return response() -> json(['cursos' => $curso -> alunos]);
    }
}
