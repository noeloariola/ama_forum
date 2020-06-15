<?php

namespace App\Http\Middleware;

use Closure;

class ApiCookie
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      if (!$request->bearerToken()) {
         if ($request->hasCookie('ama_forum_token')) {
             $token = $request->cookie('ama_forum_token');
             $request->headers->add(['Authorization' => 'Bearer ' . $token]);
         }
     }
     return $next($request);
    }
}
