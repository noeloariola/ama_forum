<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Student;

class User extends Authenticatable
{
   use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public $studentInfo;

    protected $fillable = [
        'name', 'email', 'password', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
   //  public function findForPassport($username)
   //  {
   //     return Student::where('usn', $username)->first();
   //  }

   
   public function morpStud() {
      return $this->belongsToMany('App\Student', 'id', 'user_id');
    }

    public function student() {
      return $this->belongsTo('App\Student', 'id', 'user_id');
    }
   
    public function handouts() {
       return $this->hasMany('App\Handout', 'user_id', 'id');
    }
  

   public function isStudent() {
      return $this->type == 'student';
   }

   public function moreInfo() {
      return $this->hasOne('App\Student', 'user_id', 'id');
   }
}
