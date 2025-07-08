const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const depositRoutes = require('./routes/depositRoutes');
app.use('/api/deposits', depositRoutes);

app.get('/', (req, res) => {
  res.send('LudoEarn237 backend is running!');
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});
