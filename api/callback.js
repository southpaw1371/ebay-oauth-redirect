// api/callback.js
export default function handler(req, res) {
  const query = req.query;

  if (query.code) {
    console.log("Authorization Code:", query.code);
  }

  res.status(200).send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>eBay Authorization Successful</h1>
        <p>You can now close this window.</p>
        <code>${JSON.stringify(query)}</code>
      </body>
    </html>
  `);
}
