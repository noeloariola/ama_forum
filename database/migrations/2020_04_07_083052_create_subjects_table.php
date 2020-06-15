<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   public function up()
   {
      Schema::create('subjects', function (Blueprint $table) {
         $table->increments('id');
         $table->integer('user_id');
         $table->string('title');
         $table->enum('level', ['senior-high', 'college']);
         $table->integer('year');
         $table->timestamps();
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('subjects');
   }
}