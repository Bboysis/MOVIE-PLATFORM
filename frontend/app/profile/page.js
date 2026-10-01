"use client";

import Link from "next/link";
import {
  UserRound,
  Wallet,
  Gift,
  Users,
  History,
  Settings,
  Bell,
  ShieldCheck,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Demo User",
    email: "user@example.com",
    memberSince: "September 2026",
  };

  return (
    <main className="profile-page">

      {/* Profile Header */}
      <section className="profile-header">
        <div className="profile-avatar">
          <UserRound size={42} strokeWidth={1.5} />
        </div>

        <div className="profile-user-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <span>Member since {user.memberSince}</span>
        </div>
      </section>

      {/* Account Overview */}
      <section className="profile-overview">

        <div className="profile-stat">
          <span>Total Balance</span>
          <strong>5,550 ETB</strong>
        </div>

        <div className="profile-stat">
          <span>Movie Earnings</span>
          <strong>1,250 ETB</strong>
        </div>

        <div className="profile-stat">
          <span>Referral Earnings</span>
          <strong>300 ETB</strong>
        </div>

      </section>

      {/* Account Menu */}
      <section className="profile-section">

        <h2>Account</h2>

        <div className="profile-menu">

          <Link href="/wallet" className="profile-menu-item">
            <div className="profile-menu-icon">
              <Wallet size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Wallet</strong>
              <span>Balance, deposits and withdrawals</span>
            </div>

            <ChevronRight size={19} />
          </Link>

          <Link href="/rewards" className="profile-menu-item">
            <div className="profile-menu-icon">
              <Gift size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Rewards</strong>
              <span>View your earnings and reward activity</span>
            </div>

            <ChevronRight size={19} />
          </Link>

          <Link href="/referrals" className="profile-menu-item">
            <div className="profile-menu-icon">
              <Users size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Referrals</strong>
              <span>Invite friends and track referral rewards</span>
            </div>

            <ChevronRight size={19} />
          </Link>
          
           

          <Link href="/wallet/transactions" className="profile-menu-item">
            <div className="profile-menu-icon">
              <History size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Transaction History</strong>
              <span>View your wallet activity</span>
            </div>

            <ChevronRight size={19} />
          </Link>

        </div>

      </section>

      {/* Preferences */}
      <section className="profile-section">

        <h2>Preferences</h2>

        <div className="profile-menu">

          <Link href="notifications" className="profile-menu-item profile-menu-button">
            <div className="profile-menu-icon">
              <Bell size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Notifications</strong>
              <span>Manage your notification preferences</span>
            </div>

            <ChevronRight size={19} />
          </Link>

          <Link href="/settings" className="profile-menu-item profile-menu-button">
            <div className="profile-menu-icon">
              <Settings size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Settings</strong>
              <span>Account and application settings</span>
              
            </div>

            <ChevronRight size={19} />
          </Link>
          <button className="profile-menu-item profile-menu-button">
            <div className="profile-menu-icon">
              <ShieldCheck size={20} />
            </div>

            <div className="profile-menu-content">
              <strong>Security</strong>
              <span>Password and account security</span>
            </div>

            <ChevronRight size={19} />
          </button>

        </div>

      </section>

      {/* Logout */}
      <section className="profile-logout-section">

        <button className="profile-logout">
          <LogOut size={19} />
          <span>Sign Out</span>
        </button>

      </section>

      {/* Demo Notice */}
      <div className="profile-demo-notice">
        <strong>Demo account</strong>
        <p>
          Account information and balances are currently demonstration
          values. Production data will come from the authenticated backend.
        </p>
      </div>

    </main>
  );
}