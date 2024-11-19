const express = require('express')
const app = express()

app.get('/products', function (req, res) {
  res.send('Fetch data from database')
});
app.post('/products', function (req, res) {
    res.send('Insert Data')
  });
  app.put('/products', function (req, res) {
    res.send('Update Data')
  });
  app.delete('/products', function (req, res) {
    res.send('Delete from database')
  });

app.listen(5000);