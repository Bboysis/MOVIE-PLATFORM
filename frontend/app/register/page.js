"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Film,
  LockKeyhole,
  Mail,
  UserRound,
  UsersRound,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Demo registration only. Real account creation will be connected to Laravel later."
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-container auth-register-container">
        <div className="auth-brand">
          <Link href="/" className="auth-logo">
            <span className="auth-logo-mark">
              <Film size={20} />
            </span>
            <span>MOVIE</span>
          </Link>
        </div>

        <section className="auth-card">
          <div className="auth-header">
            <span className="section-eyebrow">JOIN THE PLATFORM</span>
            <h1>Create your account</h1>
            <p>
              Create an account to watch, discover, and participate in eligible
              reward activities.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="name">Full name</label>

              <div className="auth-input">
                <UserRound size={18} />

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="username">Username</label>

              <div className="auth-input">
                <UserRound size={18} />

                <input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="email">Email address</label>

              <div className="auth-input">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="password">Password</label>

              <div className="auth-input">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                />

                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <span className="auth-help">
                Use at least 8 characters.
              </span>
            </div>

            <div className="auth-form-group">
              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="auth-input">
                <LockKeyhole size={18} />

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  required
                  minLength={8}
                />
<button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="referral">
                Referral code
                <span className="optional-label">Optional</span>
              </label>

              <div className="auth-input">
                <UsersRound size={18} />

                <input
                  id="referral"
                  type="text"
                  placeholder="Enter referral code"
                />
              </div>
            </div>

            <label className="auth-checkbox auth-terms">
              <input
                type="checkbox"
                checked={agree}
                onChange={(event) => setAgree(event.target.checked)}
                required
              />

              <span>
                I agree to the{" "}
                <Link href="/terms">Terms of Service</Link>{" "}
                and <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              className="auth-submit"
              disabled={!agree}
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link href="/login">Sign in</Link>
          </p>
        </section>

        <p className="auth-footer">
          Your account information will be protected by the platform's
          authentication and security system.
        </p>
      </div>
    </main>
  );
}