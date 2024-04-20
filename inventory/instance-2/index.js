const express = require('express');
const app = express();
const port = 3000;

app.get('/api/warehouse/inventory', (req, res) => {
  res.send('Inventory Service 2');
});

app.listen(port, () => {
  console.log(`Inventory-2 is listening at http://localhost:${port}`);
});