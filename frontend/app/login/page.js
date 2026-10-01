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
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Demo login only. Real authentication will be connected to Laravel later."
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-container">
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
            <span className="section-eyebrow">WELCOME BACK</span>
            <h1>Sign in to your account</h1>
            <p>
              Continue watching movies, tracking rewards, and managing your
              wallet.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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
              <div className="auth-label-row">
                <label htmlFor="password">Password</label>

                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="auth-input">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="auth-checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              <span>Remember me</span>
            </label>

            <button type="submit" className="auth-submit">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link href="/register">Create one</Link>
          </p>
        </section>

        <p className="auth-footer">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </main>
  );
}