<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
   /**
    * Determine if the user is authorized to make this request.
    *
    * @return bool
    */
   public function authorize()
   {
      return true;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array
    */
   public function rules()
   {
      return [
         'table' => 'required',
         'title' => 'required_if:table,posts',
         'post_id' => 'required_if:table,comments,',
         'comment_id' => 'required_if:table,replies',
         'message' => 'required'
      ];
   }
}
