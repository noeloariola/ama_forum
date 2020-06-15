<?php

use Illuminate\Support\Facades\Storage;
use App\Handout;
use Illuminate\Http\Request;

// use File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Auth::routes(['login' => false, 'register' => false]);

Route::get('/dl', function() {
   // $files = File::files(public_path());
   // $file_name = "test.dat";
   // $file_url = 'public\subfolder\\'. $file_name;
   // $content = file_get_contents(base_path($map_url));
   // return $files;
   // Mail::to('noeloariola@gmail.com')->send(new ChangedPassMailable('abtoz'));
});
Route::get('download/handout', 'FileManager@downloadFile');

Route::get('/{any}', 'BasicRoute@index')->where('any', '.*');




// Route::get('/', 'BasicRoute@index');

// Route::get('/login', 'BasicRoute@login');
// Route::post('/login', 'AuthCtrl@login');