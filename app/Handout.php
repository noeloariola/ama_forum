<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Handout extends Model
{
   public $fillable = [
      'user_id', 'name', 'path', 'level', 'year'
   ];

   public function getTagNameAttribute()
   {
      return $this->attributes['name'];
   }
   public function getFilename()
   {
      return $this->name;
   }
}
