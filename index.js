const express = require('express');
const cors = require('cors');
const router = require('./routes');
const api = express();

require('dotenv').config();
require('./services/mongo').connect();

const PORT = process.env.PORT | 3000;

api.use(cors());
api.use(express.json());
api.use(router);

api.listen(PORT, error => {
  if (error)
    console.log(error);
  else
    console.log('Server running on port', PORT);
});
