<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
   public $fillable = [ 'user_id', 'post_id', 'comment_id', 'message'];
   
   public function replies() {
      return $this->hasMany('App\Reply', 'comment_id', 'id')->orderBy('created_at', 'DESC');
   }
}
