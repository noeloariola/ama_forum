<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Handout;

class FileManager extends Controller
{
   public function downloadFile(Request $request) {
      // $handout_id = $request->id;
      // $path = $request->file;
      $handout = Handout::find($request->prof_id);
      $file = $request->file;
      return Storage::download($file, $handout->name);
   }
}
