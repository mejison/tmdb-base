<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reviews', function (Blueprint $table) {
            $sm = Schema::getConnection()->getDoctrineSchemaManager();
            $indexesFound = $sm->listTableIndexes('reviews');
            if (!array_key_exists('reviews_user_id_index', $indexesFound)) {
                $table->index('user_id');
            }
            if (!array_key_exists('reviews_created_at_index', $indexesFound)) {
                $table->index('created_at');
            }
            if (!array_key_exists('reviews_updated_at_index', $indexesFound)) {
                $table->index('updated_at');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
};
