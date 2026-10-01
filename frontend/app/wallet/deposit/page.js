"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wallet,
  Copy,
  CheckCircle2,
  Upload,
  ShieldCheck,
  Info,
} from "lucide-react";

const paymentMethods = [
  {
    id: "telebirr",
    name: "Telebirr",
    accountName: "Demo Payment Account",
    accountNumber: "0000000000",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    accountName: "Demo Business Account",
    accountNumber: "0000000000",
  },
];

export default function DepositPage() {
  const [selectedMethod, setSelectedMethod] = useState("telebirr");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [proof, setProof] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedPayment = paymentMethods.find(
    (method) => method.id === selectedMethod
  );

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(
        selectedPayment.accountNumber
      );

      alert("Account number copied.");
    } catch {
      alert("Unable to copy account number.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount || !reference) {
      alert("Please enter the deposit amount and transaction reference.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="deposit-page">
        <section className="deposit-success">

          <div className="deposit-success-icon">
            <CheckCircle2 size={42} />
          </div>

          <span className="page-eyebrow">SUBMITTED</span>

          <h1>Deposit submitted</h1>

          <p>
            Your deposit request has been submitted for verification.
            Your balance will only be credited after the payment is
            reviewed and approved.
          </p>

          <div className="deposit-pending-box">
            <div>
              <span>Amount</span>
              <strong>
                {Number(amount).toLocaleString()} ETB
              </strong>
            </div>

            <div>
              <span>Status</span>
              <strong>Pending verification</strong>
            </div>
          </div>

          <Link href="/wallet" className="deposit-primary-button">
            Return to Wallet
          </Link>

        </section>
      </main>
    );
  }

  return (
    <main className="deposit-page">

      {/* Header */}
      <div className="deposit-topbar">
        <Link href="/wallet" className="deposit-back">
          <ArrowLeft size={18} />
          Wallet
        </Link>
      </div>

      <section className="deposit-header">

        <div>
          <span className="page-eyebrow">WALLET</span>

          <h1>Deposit funds</h1>

          <p>
            Add funds to your account using an available payment
            method. Deposits require verification before your balance
            is credited.
          </p>
        </div>

        <div className="deposit-header-icon">
          <Wallet size={32} />
        </div>

      </section>

      <form onSubmit={handleSubmit} className="deposit-form">

        {/* Payment Method */}
        <section className="deposit-card">

          <div className="deposit-card-heading">
            <div>
              <span>STEP 01</span>
              <h2>Choose payment method</h2>
            </div>
          </div>

          <div className="payment-methods">

            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                className={`payment-method ${
                  selectedMethod === method.id ? "selected" : ""
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="payment-method-radio">
                  {selectedMethod === method.id && (
                    <span></span>
                  )}
                </div>
                <div>
                  <strong>{method.name}</strong>
                  <span>Manual verification</span>
                </div>
              </button>
            ))}

          </div>

        </section>

        {/* Payment Instructions */}
        <section className="deposit-card">

          <div className="deposit-card-heading">
            <div>
              <span>STEP 02</span>
              <h2>Make your payment</h2>
            </div>
          </div>

          <div className="payment-account">

            <div className="payment-account-row">
              <span>Account name</span>
              <strong>{selectedPayment.accountName}</strong>
            </div>

            <div className="payment-account-row">
              <span>Account number</span>

              <div className="account-number">
                <strong>
                  {selectedPayment.accountNumber}
                </strong>

                <button
                  type="button"
                  onClick={copyAccountNumber}
                  aria-label="Copy account number"
                >
                  <Copy size={17} />
                </button>
              </div>
            </div>

          </div>

          <div className="deposit-warning">
            <Info size={18} />

            <p>
              <strong>Demo payment information.</strong>{" "}
              Do not send real money to the account shown here.
              Production payment details will only be displayed
              after the business payment account has been verified.
            </p>
          </div>

        </section>

        {/* Amount */}
        <section className="deposit-card">

          <div className="deposit-card-heading">
            <div>
              <span>STEP 03</span>
              <h2>Enter deposit amount</h2>
            </div>
          </div>

          <label className="deposit-label">
            Amount
          </label>

          <div className="amount-input">
            <input
              type="number"
              min="1"
              step="1"
              placeholder="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              required
            />

            <span>ETB</span>
          </div>

        </section>

        {/* Transaction Reference */}
        <section className="deposit-card">

          <div className="deposit-card-heading">
            <div>
              <span>STEP 04</span>
              <h2>Payment confirmation</h2>
            </div>
          </div>

          <label className="deposit-label">
            Transaction reference
          </label>

          <input
            type="text"
            className="deposit-text-input"
            placeholder="Enter the transaction ID/reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            required
          />

          <p className="deposit-help">
            Enter the exact transaction reference from your payment
            provider.
          </p>

        </section>

        {/* Proof */}
        <section className="deposit-card">

          <div className="deposit-card-heading">
            <div>
              <span>STEP 05</span>
              <h2>Payment proof</h2>
            </div>
          </div>

          <label className="proof-upload">

            <Upload size={24} />

            <strong>
              Upload payment confirmation
            </strong>

            <span>
              Screenshot or payment receipt
            </span>

            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(event) =>
                setProof(event.target.files?.[0] || null)
              }
            />

          </label>

          {proof && (
            <div className="selected-proof">
              <CheckCircle2 size={16} />
              {proof.name}
            </div>
          )}

        </section>
        {/* Submit */}
        <section className="deposit-submit-section">

          <div className="deposit-security">
            <ShieldCheck size={19} />

            <span>
              Deposits are credited only after verification.
            </span>
          </div>

          <button
            type="submit"
            className="deposit-primary-button"
          >
            Submit Deposit Request
          </button>

        </section>

      </form>

    </main>
  );
}