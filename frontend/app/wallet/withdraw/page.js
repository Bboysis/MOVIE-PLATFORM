 "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet, Building2, CheckCircle2 } from "lucide-react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bank");
  const [account, setAccount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const balance = 5550;
  const minimum = 10000;
  const monthlyLimit = 1000000;

  const value = Number(amount);

  const valid =
    value >= minimum &&
    value <= balance &&
    value <= monthlyLimit &&
    account.trim() !== "";

  function submitWithdrawal(event) {
    event.preventDefault();

    if (valid) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main className="wallet-page">
        <div className="wallet-success-card">
          <div className="success-icon">
            <CheckCircle2 size={42} />
          </div>

          <h1>Withdrawal Submitted</h1>

          <p>
            Your withdrawal request has been submitted and is waiting
            for review.
          </p>

          <div className="withdrawal-summary">
            <div>
              <span>Amount</span>
              <strong>{value.toLocaleString()} ETB</strong>
            </div>

            <div>
              <span>Method</span>
              <strong>
                {method === "bank"
                  ? "Bank Transfer"
                  : "Payment Account"}
              </strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="status-pending">
                Pending
              </strong>
            </div>
          </div>

          <Link href="/wallet" className="primary-wallet-button">
            Back to Wallet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="wallet-page">

      <section className="wallet-section-header">

        <Link href="/wallet" className="back-link">
          <ArrowLeft size={18} />
          Wallet
        </Link>

        <div>
          <span className="section-eyebrow">WALLET</span>

          <h1>Withdraw Funds</h1>

          <p>
            Request a withdrawal from your available balance.
          </p>
        </div>

      </section>

      <section className="withdrawal-layout">

        <div className="withdrawal-main-card">

          <div className="available-balance-box">

            <div className="balance-icon">
              <Wallet size={22} />
            </div>

            <div>
              <span>Available Balance</span>

              <strong>
                {balance.toLocaleString()} ETB
              </strong>
            </div>

          </div>

          <form
            className="withdrawal-form"
            onSubmit={submitWithdrawal}
          >

            <div className="form-group">

              <label htmlFor="amount">
                Withdrawal Amount
              </label>

              <div className="amount-input">

                <input
                  id="amount"
                  type="number"
                  placeholder="10,000"
                  value={amount}
                  onChange={(event) =>
                    setAmount(event.target.value)
                  }
                />

                <span>ETB</span>

              </div>

              {value > 0 && value < minimum && (
                <p className="form-error">
                  Minimum withdrawal is 10,000 ETB.
                </p>
              )}

              {value > balance && (
                <p className="form-error">
                  Amount cannot exceed your available balance.
                </p>
              )}

            </div>

            <div className="form-group">

              <label>Payment Method</label>

              <div className="payment-method-options">
                <button
                  type="button"
                  className={
                    method === "bank"
                      ? "payment-method selected"
                      : "payment-method"
                  }
                  onClick={() => setMethod("bank")}
                >

                  <Building2 size={22} />

                  <div>
                    <strong>Bank Transfer</strong>

                    <span>
                      Transfer to your registered bank account
                    </span>
                  </div>

                </button>

                <button
                  type="button"
                  className={
                    method === "payment"
                      ? "payment-method selected"
                      : "payment-method"
                  }
                  onClick={() => setMethod("payment")}
                >

                  <Wallet size={22} />

                  <div>
                    <strong>Payment Account</strong>

                    <span>
                      Transfer to your registered payment account
                    </span>
                  </div>

                </button>

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="account">
                {method === "bank"
                  ? "Bank Account Number"
                  : "Payment Account Number"}
              </label>

              <input
                id="account"
                type="text"
                placeholder={
                  method === "bank"
                    ? "Enter bank account number"
                    : "Enter payment account number"
                }
                value={account}
                onChange={(event) =>
                  setAccount(event.target.value)
                }
              />

            </div>

            <button
              type="submit"
              className="primary-wallet-button"
              disabled={!valid}
            >
              Request Withdrawal
            </button>

          </form>

        </div>

        <aside className="withdrawal-rules-card">

          <h2>Withdrawal Rules</h2>

          <div className="rule-item">
            <strong>Sunday Processing</strong>

            <span>
              Withdrawal requests are processed according to the
              platform's Sunday withdrawal schedule.
            </span>
          </div>

          <div className="rule-item">
            <strong>Minimum Withdrawal</strong>

            <span>
              10,000 ETB
            </span>
          </div>

          <div className="rule-item">
            <strong>Monthly Limit</strong>

            <span>
              1,000,000 ETB maximum per month.
            </span>
          </div>

          <div className="withdrawal-notice">

            <span>
              Frontend demo only. No real money is transferred.
            </span>

          </div>

        </aside>

      </section>

    </main>
  );
}
            