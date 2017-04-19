<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Curso extends Model
{

    public $timestamps  = false;
    protected $table    = 'curso';
    protected $fillable = ['nome'];

    public function alunos()
    {
        return $this -> belongsToMany(User::class, 'curso_user');
    }

}
