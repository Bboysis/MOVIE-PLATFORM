<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    /**
     * Register a new user.
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:100'],
            'username' => [
                'required',
                'string',
                'min:3',
                'max:50',
                'alpha_dash',
                'unique:users,username',
            ],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email',
            ],
            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ],
            'referral_code' => [
                'nullable',
                'string',
                'max:20',
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please check the submitted information.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => strtolower($request->email),
            'referral_code' => $this->generateReferralCode(),
            'status' => 'active',
            'password' => $request->password,
        ]);

        Profile::create([
            'user_id' => $user->id,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Account created successfully.',
            'user' => $user->load('profile'),
        ], 201);
    }

    /**
     * Generate a unique referral code.
     */
    private function generateReferralCode(): string
    {
        do {
            $code = strtoupper(substr(
                bin2hex(random_bytes(5)),
                0,
                10
            ));
        } while (User::where('referral_code', $code)->exists());

        return $code;
    }
}
