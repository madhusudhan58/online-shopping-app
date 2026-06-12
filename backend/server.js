const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Online Shopping App Backend Running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});