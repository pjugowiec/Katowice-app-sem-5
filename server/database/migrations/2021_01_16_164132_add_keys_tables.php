<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddKeysTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::table('points', function (Blueprint $table) {
        //     $table->foreignId('point_id')
        //         ->constrained()
        //         ->onUpdate('cascade')
        //         ->onDelete('cascade');
        // });

        // Schema::table('localizations', function (Blueprint $table) {
        //     $table->unsignedBigInteger('point_id');
        //     $table->foreign('point_id')->references('id')->on('points');
        // });
        
        Schema::table('projects', function (Blueprint $table) {
            $table->unsignedBigInteger('localization_id');
            $table->foreign('localization_id')->references('id')->on('localizations');
        });
    
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('localizations', function (Blueprint $table) {
        //     $table->dropColumn('point_id');
        // });

        // Schema::table('points', function (Blueprint $table) {
        //     $table->dropForeign('point_id');
        // });
    }
}
