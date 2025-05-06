const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
/*
1. verifyTransaction(reference)
Sends a GET request to /transaction/verify/:reference

Confirms transaction status from Paystack

Used in webhook handler or manual verification

2. initializeTransaction({ email, amount, metadata })
Sends a POST request to /transaction/initialize

Used to dynamically generate a payment link with metadata (like driverId)

Returns the payment URL to redirect the user

3. createTransferRecipient({ name, account_number, bank_code })
Sends POST request to /transferrecipient

Registers a driver's bank account with Paystack

Returns a recipient_code to be used for payouts

4. initiateTransfer({ amount, recipient_code, reason })
Sends POST request to /transfer

Triggers payout to the driver's registered bank account

Used in your withdrawWallet or debitWallet logic

*/

const paystackApi = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  },
});

exports.initializeTransaction = async ({ email, amount, driverId }) => {
  const response = await paystackApi.post("/transaction/initialize", {
    email,
    amount,
    metadata: { driverId },
  });

  if (response.status !== 200) {
    throw new Error("Failed to initialize transaction");
  }

  return response.data;
};
