const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json())

// Construct API

app.post('/events', (req, res) => {
  const event = req.body;

  // Posts 
  axios.post('http://localhost:4000/events', event);

  // Comments
  axios.post('http://localhost:5001/events', event);

  // Query Service
  axios.post('http://localhost:4002/events', event);

  res.send({ status: 'OK' });

})

app.listen(4005);