export default function handler(req, res) {
  const query = req.query;

  console.log("eBay OAuth callback received:", query);

  res.status(200).send(`
    <html>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h2>✅ eBay OAuth Callback Received</h2>
        <p>Here is your authorization code and state:</p>
        <pre>${JSON.stringify(query, null, 2)}</pre>
      </body>
    </html>
  `);
}
