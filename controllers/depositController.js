const db = require('../database/db');
exports.submitDeposit = (req, res) => {
  const { username, amount } = req.body;

  if (!username || !amount) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = `
    INSERT INTO deposits (username, amount, status, created_at)
    VALUES (?, ?, 'pending', datetime('now'))
  `;

  db.run(query, [username, amount], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Deposit submission failed' });
    }

    res.status(200).json({
      message: 'Deposit submitted successfully',
      id: this.lastID
    });
  });
};
exports.getAllDeposits = (req, res) => {
  db.all('SELECT * FROM deposits ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Could not fetch deposits' });
    }

    res.status(200).json(rows);
  });
};
