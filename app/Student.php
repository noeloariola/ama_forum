<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
   protected $fillable = [
      'user_id', 'usn', 'level', 'year'
   ];
   protected $hidden = [
      'id', 'created_at', 'updated_at'
   ];
   public function user() {
      return $this->belongsTo('App\User', 'user_id', 'id');
   }
}
