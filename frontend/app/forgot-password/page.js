"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Film,
  Mail,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <main className="auth-page">
      <div className="auth-container auth-small-container">
        <div className="auth-brand">
          <Link href="/" className="auth-logo">
            <span className="auth-logo-mark">
              <Film size={20} />
            </span>
            <span>MOVIE</span>
          </Link>
        </div>

        <section className="auth-card">
          {!submitted ? (
            <>
              <Link href="/login" className="auth-back-link">
                <ArrowLeft size={17} />
                Back to sign in
              </Link>

              <div className="auth-header">
                <span className="section-eyebrow">ACCOUNT RECOVERY</span>

                <h1>Forgot your password?</h1>

                <p>
                  Enter your email address and we'll send instructions to
                  reset your password.
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
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="auth-submit">
                  Send Reset Instructions
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="auth-success">
              <div className="auth-success-icon">
                <CheckCircle2 size={38} />
              </div>

              <span className="section-eyebrow">CHECK YOUR EMAIL</span>

              <h1>Reset instructions sent</h1>

              <p>
                If an account exists for{" "}
                <strong>{email}</strong>, password reset instructions will be
                sent to that address.
              </p>

              <Link href="/login" className="auth-submit auth-success-button">
                Back to Sign In
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </section>

        <p className="auth-footer">
          For security, we don't reveal whether an email address is registered.
        </p>
      </div>
    </main>
  );
}