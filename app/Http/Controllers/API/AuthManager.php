<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Student;
use App;

use Mail;

class AuthManager extends Controller
{
   public function authenticate(Request $request) {
      
      $student = Student::where('usn', $request->usn)->first();
      $user = null;
      if(!$student) {
         $user = User::where('email', $request->usn)->first(); 
      }
      if($student) {
         $user = $student->user;
         unset($student->user);
         $user->sudent_info = $student;
      }
      if($user) {
         
         if (auth()->attempt(['email' => $user->email, 'password' => $request->password])) {
            $accessToken = $user->createToken($user->id)->accessToken;

            if (App::environment('local')) {
               return response()->json([
                  "error" => [],
                  "accessToken" => $accessToken,
                  "login" => "SUCCESS",
                  "account" => $user
               ]);
            }

            $cookie = cookie('ama_forum_token', $accessToken, 60);
            return response()->json([
                  "error" => [],
                  "accessToken" => null,
                  "login" => "SUCCESS",
                  "account" => $user
            ])->cookie($cookie);
         }
      }

      return response()->json([
         "login" => "FAILED",
         "error" => [
            "message" => "login failed"
         ]
      ]);
   }
   public function myProfile(Request $request) {
      $user = Auth::user();
      if($user && $user->isStudent()) {
         $user->student_info = Student::where('user_id', $user->id)->first();
      }
      return response()->json(['success' => true, 'account' => $user]);
   }
   // public function logout(Request $request) {
   //    if ($request->user()->token()->revoke()) {
   //       $cookie = Cookie::forget('cbt_refresher_api_token');
   //       return response()->json([
   //          "message" => "successful-logout"
   //       ])->withCookie($cookie);
   //    }
   //    return response()->json([
   //       "error" => [
   //          'message' => "client doesn't have any session"
   //       ]
   //    ]);
   // }
}
