"use client";

import {
  ArrowDownToLine,
  ArrowUpFromLine,
  CircleDollarSign,
  Clock3,
  Film,
  Gift,
  History,
  Plus,
  WalletCards,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "movie",
    title: "Movie activity reward",
    date: "Today, 10:42",
    amount: 25,
    status: "Completed",
  },
  {
    id: 2,
    type: "referral",
    title: "Referral reward",
    date: "Yesterday, 18:20",
    amount: 100,
    status: "Completed",
  },
  {
    id: 3,
    type: "deposit",
    title: "Wallet deposit",
    date: "Sep 19, 14:15",
    amount: 4000,
    status: "Completed",
  },
];

const transactionIcons = {
  movie: Film,
  referral: Gift,
  deposit: ArrowDownToLine,
};

export default function WalletPage() {
  const deposited = 4000;
  const movieEarnings = 1250;
  const referralEarnings = 300;

  const totalBalance =
    deposited + movieEarnings + referralEarnings;

  return (
    <main className="wallet-page">
      <section className="wallet-header">
        <div>
          <span className="section-label">YOUR MONEY</span>
          <h1>Wallet</h1>
          <p>
            Manage your balance, deposits, earnings and withdrawals.
          </p>
        </div>
      </section>

      <section className="wallet-balance-card">
        <div className="balance-top">
          <div>
            <span>Total Balance</span>

            <h2>
              {totalBalance.toLocaleString()} ETB
            </h2>
          </div>

          <div className="balance-icon">
            <WalletCards size={25} />
          </div>
        </div>

        <div className="balance-breakdown">
          <div>
            <span>Deposited</span>
            <strong>
              {deposited.toLocaleString()} ETB
            </strong>
          </div>

          <div>
            <span>Movie earnings</span>
            <strong>
              {movieEarnings.toLocaleString()} ETB
            </strong>
          </div>

          <div>
            <span>Referral earnings</span>
            <strong>
              {referralEarnings.toLocaleString()} ETB
            </strong>
          </div>
        </div>
      </section>

      <section className="wallet-actions">
        <a href="/wallet/deposit" className="wallet-action primary">
          <Plus size={20} />
          <span>
            <strong>Deposit</strong>
            <small>Add money to your wallet</small>
          </span>
        </a>

        <a href="/wallet/withdraw" className="wallet-action">
          <ArrowUpFromLine size={20} />
          <span>
            <strong>Withdraw</strong>
            <small>Request a withdrawal</small>
          </span>
        </a>

        <a href="/wallet/transactions" className="wallet-action">
          <History size={20} />
          <span>
            <strong>Transactions</strong>
            <small>View wallet history</small>
          </span>
        </a>
      </section>

      <section className="wallet-stats">
        <div className="wallet-stat">
          <CircleDollarSign size={20} />
          <div>
            <span>Available balance</span>
            <strong>
              {totalBalance.toLocaleString()} ETB
            </strong>
          </div>
        </div>

        <div className="wallet-stat">
          <Clock3 size={20} />
          <div>
            <span>Pending withdrawals</span>
            <strong>0 ETB</strong>
          </div>
        </div>
      </section>

      <section className="transactions-section">
        <div className="transactions-heading">
          <div>
            <span className="section-label">ACTIVITY</span>
            <h2>Recent transactions</h2>
          </div>

          <a href="/wallet/transactions">
            View all
          </a>
        </div>

        <div className="transaction-list">
          {transactions.map((transaction) => {
            const Icon =
              transactionIcons[transaction.type];
              return (
              <div
                className="transaction-item"
                key={transaction.id}
              >
                <div className="transaction-icon">
                  <Icon size={19} />
                </div>

                <div className="transaction-details">
                  <strong>{transaction.title}</strong>
                  <span>{transaction.date}</span>
                </div>

                <div className="transaction-amount">
                  <strong>
                    +{transaction.amount.toLocaleString()} ETB
                  </strong>

                  <span>{transaction.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="wallet-notice">
        <strong>Important</strong>
        <p>
          These balances are demonstration values for the frontend.
          The production wallet will use a server-side transaction
          ledger and will not trust values supplied by the browser.
        </p>
      </div>
    </main>
  );
}