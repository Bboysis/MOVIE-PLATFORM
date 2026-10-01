 <?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;

Route::get('/health', function (): JsonResponse {
    return response()->json([
        'success' => true,
        'message' => 'Movie Platform API is running.',
    ]);
});

Route::post('/register', [AuthController::class, 'register']);