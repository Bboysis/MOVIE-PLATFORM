"use client";

import {
  Users,
  Copy,
  Share2,
  Gift,
  CheckCircle2,
  Clock3,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export default function ReferralsPage() {
  const referralCode = "MOVIE-SISAY25";
  const referralLink = `https://movie-platform.example/ref/${referralCode}`;

  const stats = {
    totalReferrals: 12,
    qualifiedReferrals: 3,
    pendingReferrals: 2,
    totalEarned: 300,
  };

  const referrals = [
    {
      name: "User A",
      status: "Qualified",
      reward: 100,
      date: "Sep 18, 2026",
    },
    {
      name: "User B",
      status: "Qualified",
      reward: 100,
      date: "Sep 17, 2026",
    },
    {
      name: "User C",
      status: "Qualified",
      reward: 100,
      date: "Sep 15, 2026",
    },
    {
      name: "User D",
      status: "Pending",
      reward: 0,
      date: "Sep 20, 2026",
    },
  ];

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      alert("Referral link copied.");
    } catch {
      alert("Unable to copy the referral link.");
    }
  };

  const shareReferralLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join Movie",
          text: "Join me on Movie and start earning rewards.",
          url: referralLink,
        });
      } catch {
        // User cancelled the share dialog.
      }
    } else {
      await copyReferralLink();
    }
  };

  return (
    <main className="referrals-page">

      {/* Header */}
      <section className="referrals-header">
        <div>
          <span className="page-eyebrow">REFERRAL PROGRAM</span>

          <h1>Invite. Earn. Repeat.</h1>

          <p>
            Invite people to the platform and receive a referral reward
            when they complete the required qualification activity.
          </p>
        </div>

        <div className="referrals-header-icon">
          <Users size={34} strokeWidth={1.5} />
        </div>
      </section>

      {/* Referral Link Card */}
      <section className="referral-link-card">

        <div className="referral-link-content">
          <span>Your referral link</span>

          <div className="referral-link-box">
            <input
              value={referralLink}
              readOnly
              aria-label="Referral link"
            />

            <button
              type="button"
              onClick={copyReferralLink}
              className="referral-copy-button"
            >
              <Copy size={18} />
              <span>Copy</span>
            </button>
          </div>

          <div className="referral-code">
            <span>Your referral code:</span>
            <strong>{referralCode}</strong>
          </div>
        </div>

        <button
          type="button"
          onClick={shareReferralLink}
          className="referral-share-button"
        >
          <Share2 size={19} />
          Share
        </button>

      </section>

      {/* Stats */}
      <section className="referral-stats">

        <div className="referral-stat-card">
          <div className="referral-stat-icon">
            <Users size={20} />
          </div>

          <div>
            <span>Total Referrals</span>
            <strong>{stats.totalReferrals}</strong>
          </div>
        </div>

        <div className="referral-stat-card">
          <div className="referral-stat-icon">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <span>Qualified</span>
            <strong>{stats.qualifiedReferrals}</strong>
          </div>
        </div>

        <div className="referral-stat-card">
          <div className="referral-stat-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <span>Pending</span>
            <strong>{stats.pendingReferrals}</strong>
          </div>
        </div>

        <div className="referral-stat-card">
          <div className="referral-stat-icon">
            <Gift size={20} />
          </div>
          <div>
            <span>Total Earned</span>
            <strong>{stats.totalEarned.toLocaleString()} ETB</strong>
          </div>
        </div>

      </section>

      {/* How It Works */}
      <section className="referral-how-section">

        <div className="section-heading">
          <span className="page-eyebrow">HOW IT WORKS</span>
          <h2>Three simple steps</h2>
        </div>

        <div className="referral-steps">

          <div className="referral-step">
            <div className="referral-step-number">01</div>

            <UserPlus size={22} />

            <h3>Invite</h3>

            <p>
              Share your unique referral link with someone you know.
            </p>
          </div>

          <div className="referral-step">
            <div className="referral-step-number">02</div>

            <CheckCircle2 size={22} />

            <h3>Qualify</h3>

            <p>
              Your referred user creates an account, verifies it,
              and completes the required eligible activity.
            </p>
          </div>

          <div className="referral-step">
            <div className="referral-step-number">03</div>

            <Gift size={22} />

            <h3>Earn</h3>

            <p>
              Once the qualification requirements are verified,
              the referral reward is credited to your account.
            </p>
          </div>

        </div>

      </section>

      {/* Referral History */}
      <section className="referral-history-section">

        <div className="section-heading">
          <span className="page-eyebrow">ACTIVITY</span>
          <h2>Referral history</h2>
        </div>

        <div className="referral-table">

          <div className="referral-table-header">
            <span>User</span>
            <span>Status</span>
            <span>Reward</span>
            <span>Date</span>
          </div>

          {referrals.map((referral, index) => (
            <div className="referral-table-row" key={index}>

              <div className="referral-user">
                <div className="referral-user-avatar">
                  <UserPlus size={17} />
                </div>

                <span>{referral.name}</span>
              </div>

              <div>
                {referral.status === "Qualified" ? (
                  <span className="referral-status qualified">
                    <CheckCircle2 size={14} />
                    Qualified
                  </span>
                ) : (
                  <span className="referral-status pending">
                    <Clock3 size={14} />
                    Pending
                  </span>
                )}
              </div>

              <strong>
                {referral.reward > 0
                  ? `${referral.reward} ETB`
                  : "Pending"}
              </strong>

              <span className="referral-date">
                {referral.date}
              </span>

            </div>
          ))}

        </div>

      </section>

      {/* Important Rules */}
      <section className="referral-rules">

        <div className="referral-rules-icon">
          <Gift size={22} />
        </div>

        <div>
          <h3>Referral reward rules</h3>

          <p>
            A referral reward is earned only after the referred account
            meets the platform's qualification requirements. Creating
            multiple accounts, self-referrals, or other abusive activity
            may result in referral rewards being rejected.
          </p>
        </div>

        <ArrowRight size={20} />

      </section>

      {/* Demo Notice */}
      <div className="referral-demo-notice">
        <strong>Demo data</strong>

        <p>
          Referral counts, rewards, users, and referral codes shown on
          this page are currently demonstration values. Production
          referral qualification and rewards will be verified by the
          backend.
        </p>
      </div>

    </main>
  );
}