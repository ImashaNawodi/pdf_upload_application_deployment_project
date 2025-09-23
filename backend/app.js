const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const userRoutes = require('./routes/userRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
require('express-async-errors');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT || 8000;

app.use('/user', userRoutes);
app.use('/pdf', pdfRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to PDF Upload App!');
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
  });