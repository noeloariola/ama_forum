<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Post;
use App\Comment;
use App\Reply;

class ThreadManager extends Controller
{
   public function newThread(PostRequest $request) {
      // $user = User::find(2);                                                        // TEMP
      $user = Auth::user();
      $validated = $request->validated();
      if(isset($validated->errors)) {
         return response()->json($validated);
      }
      $request['user_id'] = $user->id;
      $response = null;
      switch ($validated['table']) {
         case 'posts':
            $response = Post::create($request->only('user_id', 'title', 'message')); $response->poster_name = $user->name;
            break;
         case 'comments':
            $response = Comment::create($request->only('user_id', 'post_id', 'message')); $response->commentor_name = $user->name;
            Post::where('id', $validated['post_id'])->update(['updated_at' => now()]);
            break;
         case 'replies':
            $response = Reply::create($request->only('user_id', 'comment_id', 'message')); $response->replier_name = $user->name;
            $comment = Comment::find($response->comment_id);
            Post::where('id', $comment->post_id)->update(['updated_at' => now()]);   
            break;
         default:
            return response()->json(['THREAD_UPDATE' => 'FAILED']);
            break;
      }
      if($response) {
         return response()->json(['THREAD_UPDATE' => 'SUCCESS', 'new_item' => $response]);
      }
      return response()->json(['THREAD_UPDATE' => 'FAILED']);
   }


   public function threads() {
      // Log::debug('Values after sorting', 'asasdasd');
      $posts = Post::orderBy('updated_at', 'DESC')->get();
      $posts->transform(function($post) {
         $user = User::find($post->user_id);
         $post->poster_name = $user->name;
         $post->type = $user->type;

         $comments = $post->comments;

         $comments->transform(function($comment) {
            $commentor = User::find($comment->user_id);
            $comment->commentor_name = $commentor->name;
            $comment->type = $commentor->type;
            $replies = $comment->replies;
            // $replies = $replies;
            $replies->transform(function($reply) {
               $replier = User::find($reply->user_id);
               $reply->replier_name = $replier->name;
               $reply->type = $replier->type;
               return $reply;
            });
            $comment->replies = $comment->replies;
            return $comment;
         });

         $post->comments = $comments;

         return $post;
      });     
      $posts = $posts->sortByDesc(function($post, $key) {});
      return response()->json(['posts' => $posts]);
   }
}
