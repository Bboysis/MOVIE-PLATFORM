 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();

            $table->string('title', 255);
            $table->string('slug', 255)->unique();

            $table->text('description')->nullable();

            $table->unsignedSmallInteger('year')->nullable();
            $table->unsignedSmallInteger('duration_minutes')->nullable();

            $table->decimal('rating', 3, 1)->nullable();

            $table->string('age_rating', 20)->nullable();
            $table->string('language', 50)->default('English');

            $table->enum('status', [
                'draft',
                'published',
                'archived',
            ])->default('draft');

            $table->text('poster_url')->nullable();
            $table->text('backdrop_url')->nullable();
            $table->text('video_url')->nullable();
            $table->text('trailer_url')->nullable();

            $table->boolean('is_featured')->default(false);

            $table->timestamps();

            $table->index('status');
            $table->index('year');
            $table->index('is_featured');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};