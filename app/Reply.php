<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{  
   public $fillable = [ 'user_id', 'comment_id', 'message' ];
}
