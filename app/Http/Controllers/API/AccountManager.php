<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Registration;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Student;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Mail\ChangedPassMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cookie;

class AccountManager extends Controller
{
   public function addAccount(Registration $request) {
      $validated = $request->validated();
      if(isset($validated->errors)) {
         return response()->json($validated);
      }
      $result = $this->createUser($validated); 
      if($result) {
         return response()->json(['registration_result' => 'SUCCESS', 'user' => $result]);
      }
      return response()->json(['registration_result' => 'FAILED']);
   }
   public function createUser($data) {
      $user = User::create([
                           'name' => $data['name'],
                           'type' => $data['type'],
                           'email' => $data['email'],
                           'password' => Hash::make($data['password']),
                        ]);
      if($data['type'] != 'student') return $user;
      $student = Student::create([
         'user_id' => $user->id,
         'usn' => $data['usn'],
         'level' => $data['level'],
         'year' => $data['year'],
      ]);
      return ['user' => $user, 'student' => $student];
   }
   public function masterList(Request $request){
      if(!isset($request->model)) {
         return response()->json(['error' => 'model name is required!']);
      }
      $users = [];
      if($request->has('searchName') && $request->searchName != '') {
         $users = User::where('active', 1)->where('type', $request->model)->where('name', 'regexp', $request->searchName)->get();
      }else{
         $users = User::where('active', 1)->where('type', $request->model)->get();
      }

      foreach ($users as $user) {
         if($user->type == 'student') {
            $info = $user->moreInfo;
            $user->usn = $info->usn;
            $user->level = $info->level;
            $user->year = $info->year;
            // $user->usn = $student->usn;
         }
      }
      return response()->json(['STATUS' => 'SUCCESS', 'list' => $users]);
   }
   public function updateAccount(Request $request) {
      if($request->has('usn')) {
         DB::table('users')->where('id', $request->id)->update([
            'name' => $request->name, 'email' => $request->email
         ]);
         DB::table('students')->where('user_id', $request->id)->update([
            'usn' => $request->usn, 'level' => $request->level, 'year' => $request->year
         ]);
      }else {
         DB::table('users')->where('id', $request->id)->update([
            'name' => $request->name, 'email' => $request->email
         ]);
      }
      
      return response()->json(['update_result' => 'SUCCESS']);
   }
   public function deleteAccount(Request $request) {
      $result = DB::table('users')->where('id', $request->id)->update(['active' => 0]); 
      if(!$result) {
         return response()->json(['STATUS' => 'FAILED']);
      }
      // DB::table('students')->where('user_id', $request->id)->delete();
      // DB::table('users')->where('id', $request->id)->delete();

      return response()->json(['STATUS' => 'SUCCESS']);
   }
   public function changePassword(Request $request) {
      $user = User::where('email', $request->email)->first();
      if(!$user) {
         return response()->json(['error' => 'email address not found.']);
      }
      $password = Str::random(10);
      DB::table('users')->where('email', $request->email)->update(['password' => Hash::make($password)]);

      Mail::to($request->email)->send(new ChangedPassMailable($password));

      return response()->json(['status' => 'success']);
   }

   public function logoutUser(Request $request) {
      if ($request->user()->token()->revoke()) {
         $cookie = Cookie::forget('ama_forum_token');
         return response()->json([
               "message" => "successful-logout"
         ])->withCookie($cookie);
      }
      return response()->json([
         "error" => [
               'message' => "client doesn't have any session"
         ]
      ]);
   }
}
