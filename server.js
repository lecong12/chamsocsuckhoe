require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/cham-soc-suc-khoe';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Chăm Sóc Sức Khỏe Blockchain!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});