const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

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

/*
async function testCreateRecipient() {
  try {
    const response = await axios.post(
      "https://api.paystack.co/transferrecipient",
      {
        type: "nuban",
        name: "Test User",
        account_number: "01000000010",
        bank_code: "058",
        currency: "NGN",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Response:", response.data);
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
}

testCreateRecipient();
*/
const paystackApi = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
});

// Initialize a transaction
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

// Verify a transaction
exports.verifyTransaction = async (reference) => {
  const response = await paystackApi.get(`/transaction/verify/${reference}`);

  if (response.status !== 200) {
    throw new Error("Failed to verify transfer");
  }

  return response.data;
};

// Initiate a transfer
exports.initiateTransfer = async ({
  amount,
  reason,
  recipient_code,
  driverId,
}) => {
  const response = await paystackApi.post("/transfer", {
    source: "balance",
    amount: Math.floor(amount * 100), // Paystack uses kobo
    reason,
    recipient: recipient_code,
    metadata: {
      driverId,
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to initiate transfer");
  }

  return response.data;
};

// Create a transfer recipient
exports.createTransferRecipient = async ({
  name,
  account_number,
  bank_code,
}) => {
  try {
    const response = await paystackApi.post("/transferrecipient", {
      type: "nuban",
      name,
      account_number,
      bank_code,
      currency: "NGN",
    });

    // ✅ Log the actual response message for visibility
    console.log("✅ Paystack recipient created:", response.data.message);

    return response.data.data.recipient_code;
  } catch (error) {
    if (error.response) {
      console.error("❌ Paystack error:", error.response.data);
    } else {
      console.error("❌ Network or unexpected error:", error.message);
    }

    throw new Error("Failed to create transfer recipient");
  }
};

exports.paystackApi = paystackApi;
