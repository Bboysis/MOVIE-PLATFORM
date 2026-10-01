 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username', 50)->unique()->after('name');
            $table->string('phone', 30)->nullable()->unique()->after('email');
            $table->string('referral_code', 20)->unique()->after('phone');

            $table->enum('status', [
                'active',
                'suspended',
                'banned',
                'pending',
            ])->default('active')->after('referral_code');

            $table->timestamp('email_verified_at')->nullable()->change();
            $table->timestamp('phone_verified_at')->nullable();

            $table->timestamp('last_login_at')->nullable();
            $table->timestamp('last_activity_at')->nullable();

            $table->boolean('is_admin')->default(false);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['username']);
            $table->dropUnique(['phone']);
            $table->dropUnique(['referral_code']);

            $table->dropColumn([
                'username',
                'phone',
                'referral_code',
                'status',
                'phone_verified_at',
                'last_login_at',
                'last_activity_at',
                'is_admin',
            ]);
        });
    }
};