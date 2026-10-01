"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Shield,
  Globe,
  Smartphone,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <main className="settings-page">

      <section className="settings-header">

        <Link href="/profile" className="back-link">
          <ArrowLeft size={18} />
          Profile
        </Link>

        <div>
          <span className="section-eyebrow">
            ACCOUNT
          </span>

          <h1>Settings</h1>

          <p>
            Manage your account preferences and security settings.
          </p>
        </div>

      </section>

      <section className="settings-layout">

        <div className="settings-main">

          {/* Notifications */}

          <div className="settings-card">

            <div className="settings-card-header">
              <div className="settings-icon">
                <Bell size={20} />
              </div>

              <div>
                <h2>Notifications</h2>
                <p>
                  Control how you receive account updates.
                </p>
              </div>
            </div>

            <div className="settings-option">

              <div>
                <strong>Push Notifications</strong>

                <span>
                  Receive important account and reward notifications.
                </span>
              </div>

              <button
                type="button"
                className={
                  notifications
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  setNotifications(!notifications)
                }
                aria-label="Toggle push notifications"
              >
                <span />
              </button>

            </div>

            <div className="settings-option">

              <div>
                <strong>Email Updates</strong>

                <span>
                  Receive important account information by email.
                </span>
              </div>

              <button
                type="button"
                className={
                  emailUpdates
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  setEmailUpdates(!emailUpdates)
                }
                aria-label="Toggle email updates"
              >
                <span />
              </button>

            </div>

            <div className="settings-option">

              <div>
                <strong>Marketing Messages</strong>

                <span>
                  Receive promotional and platform updates.
                </span>
              </div>

              <button
                type="button"
                className={
                  marketing
                    ? "settings-toggle active"
                    : "settings-toggle"
                }
                onClick={() =>
                  setMarketing(!marketing)
                }
                aria-label="Toggle marketing messages"
              >
                <span />
              </button>

            </div>

          </div>

          {/* Account */}

          <div className="settings-card">

            <div className="settings-card-header">
              <div className="settings-icon">
                <Shield size={20} />
              </div>

              <div>
                <h2>Account & Security</h2>

                <p>
                  Manage your account protection.
                </p>
              </div>
            </div>
            <Link
              href="/profile"
              className="settings-link"
            >
              <div>
                <strong>Profile Information</strong>

                <span>
                  Name, email and account information.
                </span>
              </div>

              <ChevronRight size={18} />
            </Link>

            <Link
              href="/profile"
              className="settings-link"
            >
              <div>
                <strong>Password & Security</strong>

                <span>
                  Manage your password and security options.
                </span>
              </div>

              <ChevronRight size={18} />
            </Link>

          </div>

          {/* App */}

          <div className="settings-card">

            <div className="settings-card-header">
              <div className="settings-icon">
                <Smartphone size={20} />
              </div>

              <div>
                <h2>App Settings</h2>

                <p>
                  Configure your experience.
                </p>
              </div>
            </div>

            <div className="settings-option">

              <div>
                <strong>Install App</strong>

                <span>
                  Install the platform as an app on your device.
                </span>
              </div>

              <Link
                href="/"
                className="settings-action"
              >
                View
              </Link>

            </div>

            <div className="settings-option">

              <div>
                <strong>Language</strong>

                <span>
                  English
                </span>
              </div>

              <button
                type="button"
                className="settings-action"
              >
                English
              </button>

            </div>

          </div>

        </div>

        {/* Sidebar */}

        <aside className="settings-sidebar">

          <div className="settings-security-card">

            <div className="settings-icon">
              <Lock size={20} />
            </div>

            <h2>Security</h2>

            <p>
              Your account security will include authentication,
              session protection, device management and additional
              verification in the production system.
            </p>

          </div>

          <div className="settings-security-card">

            <div className="settings-icon">
              <Globe size={20} />
            </div>

            <h2>International Platform</h2>

            <p>
              The interface is designed for an international audience.
              Currency and payment options will be configurable.
            </p>

          </div>

        </aside>

      </section>

    </main>
  );
}