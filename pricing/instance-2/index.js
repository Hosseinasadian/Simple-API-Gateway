const express = require('express');
const app = express();
const port = 3000;

app.get('/api/warehouse/pricing', (req, res) => {
  res.send('Pricing Service 2');
});

app.listen(port, () => {
  console.log(`Pricing-2 is listening at http://localhost:${port}`);
});