"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  CircleDollarSign,
  Clock3,
  Info,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const rewardTiers = [
  {
    name: "Free",
    minimum: 0,
    multiplier: 1,
  },
  {
    name: "Starter",
    minimum: 100,
    multiplier: 1.2,
  },
  {
    name: "Plus",
    minimum: 4000,
    multiplier: 1.5,
  },
  {
    name: "Pro",
    minimum: 8000,
    multiplier: 2,
  },
  {
    name: "Premium",
    minimum: 16000,
    multiplier: 2.5,
  },
];

const BASE_REWARD = 25;
const DAILY_CAP = 500;

export default function RewardsPage() {
  const [deposit, setDeposit] = useState(0);
  const [activitiesPerDay, setActivitiesPerDay] = useState(5);

  const currentTier = useMemo(() => {
    return [...rewardTiers]
      .reverse()
      .find((tier) => deposit >= tier.minimum) || rewardTiers[0];
  }, [deposit]);

  const rewardPerActivity = BASE_REWARD * currentTier.multiplier;

  const estimatedDaily = Math.min(
    rewardPerActivity * activitiesPerDay,
    DAILY_CAP
  );

  const estimatedMonthly = estimatedDaily * 30;

  return (
    <main className="rewards-page">
      <section className="rewards-header">
        <span className="section-label">EARN</span>

        <h1>Rewards</h1>

        <p>
          Understand how eligible activities, deposit tiers and reward
          rules affect your estimated earnings.
        </p>
      </section>

      <section className="calculator-layout">
        <div className="calculator-card">
          <div className="calculator-title">
            <div className="calculator-icon">
              <Calculator size={22} />
            </div>

            <div>
              <h2>Earnings Calculator</h2>
              <p>Adjust the values to see an estimate.</p>
            </div>
          </div>

          <div className="calculator-field">
            <label htmlFor="deposit">
              Deposited amount
            </label>

            <div className="input-wrapper">
              <span>ETB</span>

              <input
                id="deposit"
                type="number"
                min="0"
                value={deposit}
                onChange={(e) =>
                  setDeposit(Math.max(0, Number(e.target.value)))
                }
              />
            </div>
          </div>

          <div className="calculator-field">
            <label htmlFor="activities">
              Eligible activities per day
            </label>

            <div className="input-wrapper">
              <Clock3 size={18} />

              <input
                id="activities"
                type="number"
                min="0"
                max="100"
                value={activitiesPerDay}
                onChange={(e) =>
                  setActivitiesPerDay(
                    Math.max(0, Number(e.target.value))
                  )
                }
              />
            </div>
          </div>

          <div className="tier-result">
            <div>
              <span>Current tier</span>
              <strong>{currentTier.name}</strong>
            </div>

            <div className="tier-multiplier">
              {currentTier.multiplier}×
            </div>
          </div>

          <div className="calculator-note">
            <Info size={16} />

            <span>
              Deposit amount affects the configured tier. Deposit alone
              does not generate a reward.
            </span>
          </div>
        </div>

        <div className="earnings-result-card">
          <div className="result-label">
            <Sparkles size={17} />
            ESTIMATED REWARDS
          </div>

          <div className="reward-main">
            <span>Per eligible activity</span>

            <strong>
              {rewardPerActivity.toLocaleString()} ETB
            </strong>
          </div>

          <div className="reward-breakdown">
            <div>
              <span>Base reward</span>
              <strong>{BASE_REWARD} ETB</strong>
            </div>
            <div>
              <span>Tier multiplier</span>
              <strong>{currentTier.multiplier}×</strong>
            </div>

            <div>
              <span>Activities / day</span>
              <strong>{activitiesPerDay}</strong>
            </div>
          </div>

          <div className="estimated-total">
            <div>
              <span>Estimated daily</span>
              <strong>
                {estimatedDaily.toLocaleString()} ETB
              </strong>
            </div>

            <div>
              <span>Estimated 30 days</span>
              <strong>
                {estimatedMonthly.toLocaleString()} ETB
              </strong>
            </div>
          </div>

          <div className="cap-notice">
            <TrendingUp size={17} />

            Daily activity reward cap:
            <strong>{DAILY_CAP.toLocaleString()} ETB</strong>
          </div>
        </div>
      </section>

      <section className="tier-section">
        <div className="section-heading">
          <div>
            <span className="section-label">TIERS</span>
            <h2>Deposit tiers</h2>
          </div>
        </div>

        <div className="tier-grid">
          {rewardTiers.map((tier) => (
            <div
              key={tier.name}
              className={`tier-card ${
                currentTier.name === tier.name ? "selected" : ""
              }`}
            >
              <span className="tier-name">
                {tier.name}
              </span>

              <strong>
                {tier.minimum === 0
                  ? "No deposit"
                  : `${tier.minimum.toLocaleString()} ETB+`}
              </strong>

              <span className="tier-rate">
                {tier.multiplier}× reward multiplier
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="reward-info-section">
        <div className="reward-info-item">
          <CircleDollarSign size={22} />

          <div>
            <h3>Activity based</h3>
            <p>
              Rewards are generated by eligible activities, not simply
              by holding a deposit.
            </p>
          </div>
        </div>

        <div className="reward-info-item">
          <Clock3 size={22} />

          <div>
            <h3>Watch time matters</h3>
            <p>
              The final system will validate eligible watch time on the
              server before issuing a reward.
            </p>
          </div>
        </div>

        <div className="reward-info-item">
          <TrendingUp size={22} />

          <div>
            <h3>Rules can change</h3>
            <p>
              Final reward rates, caps and eligibility rules will be
              controlled by the platform configuration.
            </p>
          </div>
        </div>
      </section>

      <div className="calculator-disclaimer">
        Estimates shown here are for interface development only. Final
        rates, eligibility, limits, taxes and withdrawal rules must be
        configured and legally verified before any real-money launch.
      </div>
    </main>
  );
}