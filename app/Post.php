<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
   public $fillable = ['user_id', 'title', 'message'];
   
   public function comments() {
      return $this->hasMany('App\Comment', 'post_id', 'id')->orderBy('created_at', 'DESC');
   }
}
