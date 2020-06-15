<?php

namespace App\Http\Middleware;

use Closure;

class ExchangingApiToken
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

      $request->request->add(['shit' => 'shitness!']);

      return $next($request);
    }
}
