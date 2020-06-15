<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', 'API\HandoutManager@get');


Route::post('login', 'API\AuthManager@authenticate');
Route::post('register', 'API\AccountManager@addAccount');
Route::post('change_password', 'API\AccountManager@changePassword');

Route::group(['middleware' => ['auth:api']], function() {
   Route::post('logout', 'API\AccountManager@logoutUser');
   Route::get('news_and_events', 'API\NewsAndEvents@list');
});

Route::group(['middleware' => ['auth:api'], 'prefix' => 'my_profile'], function() {
   Route::get('/', 'API\AuthManager@myProfile');
});
  
// 
Route::group(['middleware' => ['auth:api'], 'prefix' => 'account'], function() {
// Route::group(['prefix' => 'account'], function() {
   Route::get('/', 'API\AuthManager@myProfile');
   Route::post('update', 'API\AccountManager@updateAccount');
   Route::post('delete', 'API\AccountManager@deleteAccount');
});

// , 
// Route::group(['prefix' => 'list'], function() {
Route::group(['middleware' => ['auth:api'], 'prefix' => 'list'], function() {
   Route::get('{model}', 'API\AccountManager@masterList');
});

Route::group(['middleware' => ['auth:api']], function() {
   Route::get('/search/prof', 'API\AccountManager@searchProf');
});

//  
// Route::group(['prefix' => 'file'], function() {
Route::group(['middleware' => ['auth:api'],'prefix' => 'file'], function() {
   Route::post('handouts', 'API\HandoutManager@uploadHandout');
   Route::get('handouts/professor/{id}', 'API\HandoutManager@masterList');
   Route::get('download/handout/{handout_id}', 'API\HandoutManager@downloadFile');
});

// 'middleware' => ['auth:api'], 
// Route::group(['prefix' => 'forum'], function() {
Route::group(['middleware' => ['auth:api'], 'prefix' => 'forum'], function() {
   Route::post('post', 'API\ThreadManager@newThread');
   Route::get('post', 'API\ThreadManager@threads');
});


// Route::group(['middleware' => ['auth:api']], function() {
// });

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


