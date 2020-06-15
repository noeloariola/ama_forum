<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Registration extends FormRequest
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
         "usn" => "required_unless:type,professor|unique:students",
         "name" => "required",
         "level" => "required_unless:type,professor",
         "year" => "required_unless:type,professor",
         "email" => "required|email|unique:users",
         "password" => "required",
         "type" => "required"
      ];
   }
   public function messages()
   {
      return [
         'usn.unique' => 'USN already used!',
         'usn.required' => 'USN is required.',
         'email.required' => 'Email address is required.',
         'email.email' => 'Not a valid email address.',
         'email.required' => 'Email address is not a valid email',
         'year.required'  => 'Year is required',
         'name.required'  => 'Name is required',
         'password.required' => 'Password is required.',
         'level.required' => 'Level is required',
         'type.required' => 'Type is required',
      ];
   }
}
