"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Wallet,
  Gift,
  PlayCircle,
  Info,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "deposit",
    title: "Deposit approved",
    message: "Your 4,000 ETB deposit has been approved.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "reward",
    title: "Movie reward received",
    message: "You received 25 ETB for completing an eligible movie activity.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    type: "referral",
    title: "Referral reward",
    message: "You received a 100 ETB referral reward.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    type: "withdrawal",
    title: "Withdrawal pending",
    message: "Your withdrawal request is waiting for review.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    type: "system",
    title: "Welcome to the platform",
    message: "Complete your profile and explore available content.",
    time: "5 days ago",
    read: true,
  },
];

function NotificationIcon({ type }) {
  if (type === "deposit") {
    return <Wallet size={19} />;
  }

  if (type === "reward") {
    return <PlayCircle size={19} />;
  }

  if (type === "referral") {
    return <Gift size={19} />;
  }

  if (type === "withdrawal") {
    return <CheckCircle2 size={19} />;
  }

  return <Info size={19} />;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  function markAsRead(id) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  return (
    <main className="notifications-page">

      <section className="notifications-header">

        <Link href="/" className="back-link">
          <ArrowLeft size={18} />
          Home
        </Link>

        <div className="notifications-title-row">

          <div>
            <span className="section-eyebrow">
              ACCOUNT
            </span>

            <h1>Notifications</h1>

            <p>
              Stay updated about your account, rewards and wallet activity.
            </p>
          </div>

          <div className="notification-header-icon">
            <Bell size={28} />
          </div>

        </div>

      </section>

      <section className="notifications-card">

        <div className="notifications-toolbar">

          <div>
            <strong>
              {unreadCount} unread
            </strong>

            <span>
              Account notifications
            </span>
          </div>

          <button
            type="button"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark all as read
          </button>

        </div>

        <div className="notification-list">

          {notifications.map((notification) => (
            <button
              type="button"
              key={notification.id}
              className={
                notification.read
                  ? "notification-item"
                  : "notification-item unread"
              }
              onClick={() => markAsRead(notification.id)}
            >

              <div className="notification-icon">
                <NotificationIcon
                  type={notification.type}
                />
              </div>

              <div className="notification-content">

                <div className="notification-title">
                  <strong>
                    {notification.title}
                  </strong>
                  {!notification.read && (
                    <span className="unread-dot" />
                  )}
                </div>

                <p>
                  {notification.message}
                </p>

                <small>
                  {notification.time}
                </small>

              </div>

            </button>
          ))}

        </div>

      </section>

    </main>
  );
}