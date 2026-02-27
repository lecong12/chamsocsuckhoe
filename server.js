require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/cham-soc-suc-khoe';
// Suppress the Mongoose 7 deprecation warning
mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error(err));

// Phục vụ các file tĩnh từ thư mục 'dist' (nơi Webpack build ra)
app.use(express.static(path.join(__dirname, 'dist')));

// Chuyển hướng mọi request không khớp về index.html để React Router xử lý
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});