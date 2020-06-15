<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\HandoutFile;
use App\User;
use App\Handout;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class HandoutManager extends Controller
{
   public function get() {
      return response()->json(['test' => 'success']);
   }
   function uploadHandout(HandoutFile $request) {
      $validated = $request->validated();
      if(isset($validated->errors)) {
         return response()->json($validated);
      }
      
      $files = $request->file('handouts');

      $uploadedFiles = [];
      foreach ($files as $file) {
         $path = $file->store('handouts');
         $handout = Handout::create([
            'user_id' => $validated['user_id'],
            'name' => $file->getClientOriginalName(),
            'path' => $path,
            'level' => $validated['level'],
            'year' => $validated['year']
         ]);
      }
      return response()->json($uploadedFiles);
   }

   public function masterList(Request $request) {
      $user = User::find($request->id);
      $files = [];
      $handouts = $user->handouts->groupBy('level');
      $handouts->transform(function($level, $key) {
         return $level->groupBy('year');
      });
      $index = -10;
      foreach ($handouts as $key => $value) {
         $collect = collect(['id' => 'class-'.$index, 'name' => $key]);
         
         $levelChildren = $handouts[$key]; // set of College and Senior-High
      
         $groupedByYears = [];
            foreach ($levelChildren->keys() as $byYearKey) {
               $index += 1;
               $byYears = collect([]);
               $byYears->put('id', 'class-'.$index);
               $byYears->put('name', 'Year: '.$levelChildren[$byYearKey][0]->year);
               $byYears->put('children', $levelChildren[$byYearKey]);
               array_push($groupedByYears, $byYears);
            }
         $collect->put('children', $groupedByYears);
         array_push($files, $collect);
         $index += 1;
      }
      return response()->json(['handouts' => $files]);
   }
   public function downloadFile(Request $request) {
      
      // $handout = Handout::find($request->handout_id);
      //               window.open(downloadUrl,'_blank');
      
   //    return Storage::download($handout->path)->withHeaders([
   //       'Content-Disposition' => 'attachment',
   //       'Content-Type' => 'application/zip'
   //   ]);

      return Storage::download($request->file);//, $handout->name, []);
      // $attached = Handout::where('acar_number', $request->acar_number)->where('type', $request->attachment_type)->get()->first(); //->where('uploaded_by', Auth::id())->get()->first();
      // if ($attached) {
      //   $path = storage_path($attached->filename);
      //   $headers = ['Content-Type: application/zip','Content-Disposition: attachment'];
      //   return response()->download($path);   //, explode('/', $attached->filename)[1]
      // }
      // return back();
    }
}
