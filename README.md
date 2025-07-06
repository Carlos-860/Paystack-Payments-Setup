# Paystack Payment API Integration

This repository contains a ReactJS frontend that integrates with the Paystack Payment API to manage customers, subaccounts, transactions, transaction splits, plans, and subscriptions. It provides a seamless interface for customers and businesses to handle payments and subscriptions via Paystack’s API.

## API Integration Overview

This project integrates with the Paystack API to handle:

### 🧑‍🤝‍🧑 Customers

Manage customer data via the Paystack API. The frontend provides functionality for:

-   **Create Customer**: Send customer details to Paystack.
-   **Get Customer**: Retrieve customer data using their unique Paystack ID.
-   **Update Customer**: Modify an existing customer's details.

### 🧾 Subaccounts

Paystack supports managing subaccounts under a master account. You can use this feature to split transactions between different subaccounts (for different businesses or affiliates).

-   **Create Subaccount**: Add new subaccounts under your Paystack account.
-   **Get Subaccounts**: Retrieve information about subaccounts.
-   **Update Subaccount**: Modify an existing subaccount.

### 💳 Transactions

Handle payments, including transaction creation, querying, and updates. With this feature, users can:

-   **Create Transaction**: Initiate a payment process with Paystack.
-   **Get Transaction Status**: Track the status of a payment transaction.
-   **Verify Transaction**: Ensure the payment was completed successfully.

### 🔄 Transaction Splits

Define how transactions are split between multiple subaccounts. Useful for marketplace and multi-party transactions.

-   **Create Transaction Split**: Define how a transaction’s amount is split between different subaccounts (percentage or flat splits).
-   **Get Transaction Splits**: View current transaction splits.

### 📅 Plans and Subscriptions

Integrate subscription-based payments for recurring billing. This includes:

-   **Create Subscription Plan**: Define new subscription plans, including pricing and frequency.
-   **Get Subscription Plans**: Retrieve details about existing subscription plans.
-   **Create Subscription**: Allow customers to subscribe to a plan and manage their subscription details.

---

## 🔜 Next Steps & Features

### 🔨 Next Features:

-   **Payouts**: Integrate the Paystack payouts API to send funds to subaccounts or customers. This would allow you to make payouts from the platform.
    -   **Create Payout Request**: Initiate a payout from Paystack.
    -   **Track Payout Status**: Monitor the status of a payout request.
-   **Refunds**: Implement functionality to issue refunds for specific transactions.
    -   **Create Refund Request**: Request a refund for a completed transaction.
    -   **Refund Status**: Track the status of a refund request.
-   **Webhooks**: Set up Paystack webhooks to receive real-time notifications about payments, subscriptions, and transactions.
    -   This will allow you to handle events like payment success, refund initiation, subscription renewal, and more.
