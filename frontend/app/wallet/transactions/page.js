"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpFromLine,
  Gift,
  PlayCircle,
} from "lucide-react";

const transactions = [
  {
    id: "TXN-1004",
    type: "movie",
    title: "Movie Reward",
    description: "Completed eligible movie activity",
    amount: 25,
    date: "Today",
    status: "Completed",
  },
  {
    id: "TXN-1003",
    type: "referral",
    title: "Referral Reward",
    description: "Qualified referral reward",
    amount: 100,
    date: "Yesterday",
    status: "Completed",
  },
  {
    id: "TXN-1002",
    type: "deposit",
    title: "Deposit",
    description: "Manual payment verification",
    amount: 4000,
    date: "Sep 18, 2026",
    status: "Completed",
  },
  {
    id: "TXN-1001",
    type: "withdrawal",
    title: "Withdrawal",
    description: "Withdrawal request",
    amount: -10000,
    date: "Sep 14, 2026",
    status: "Pending",
  },
];

function TransactionIcon({ type }) {
  if (type === "deposit") {
    return <ArrowDownToLine size={19} />;
  }

  if (type === "withdrawal") {
    return <ArrowUpFromLine size={19} />;
  }

  if (type === "referral") {
    return <Gift size={19} />;
  }

  return <PlayCircle size={19} />;
}

export default function TransactionsPage() {
  return (
    <main className="wallet-page">
      <section className="wallet-section-header">
        <Link href="/wallet" className="back-link">
          <ArrowLeft size={18} />
          Wallet
        </Link>

        <div>
          <span className="section-eyebrow">Wallet</span>
          <h1>Transaction History</h1>
          <p>
            View deposits, withdrawals, rewards and other wallet activity.
          </p>
        </div>
      </section>

      <section className="transactions-card">
        <div className="transactions-header">
          <div>
            <h2>All Transactions</h2>
            <p>Demo transaction history</p>
          </div>

          <select className="transaction-filter" defaultValue="all">
            <option value="all">All</option>
            <option value="deposit">Deposits</option>
            <option value="withdrawal">Withdrawals</option>
            <option value="movie">Movie Rewards</option>
            <option value="referral">Referrals</option>
          </select>
        </div>

        <div className="transaction-list">
          {transactions.map((transaction) => {
            const isPositive = transaction.amount > 0;

            return (
              <div className="transaction-row" key={transaction.id}>
                <div className="transaction-icon">
                  <TransactionIcon type={transaction.type} />
                </div>

                <div className="transaction-info">
                  <strong>{transaction.title}</strong>
                  <span>{transaction.description}</span>
                  <small>
                    {transaction.id} · {transaction.date}
                  </small>
                </div>

                <div className="transaction-right">
                  <strong
                    className={
                      isPositive
                        ? "transaction-positive"
                        : "transaction-negative"
                    }
                  >
                    {isPositive ? "+" : ""}
                    {transaction.amount.toLocaleString()} ETB
                  </strong>

                  <span
                    className={`transaction-status ${
                      transaction.status === "Completed"
                        ? "completed"
                        : "pending"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}