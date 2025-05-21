export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing authorization code');
  }

  res.send(`
    <h1>Authorization Code Received</h1>
    <p><strong>Code:</strong> ${code}</p>
    <p>Copy this code and paste it into your get_ebay_token.py script.</p>
  `);
}
