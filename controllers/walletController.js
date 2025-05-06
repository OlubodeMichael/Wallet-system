exports.handlePaystackWebhook = async (req, res) => {
  const { event, data } = req.body;
  console.log("Webhook received:", event, data);
  res.sendStatus(200);
};
