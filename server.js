const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Kết nối tới MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/cham-soc-suc-khoe';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công!'))
  .catch(err => console.error(err));

app.listen(3000, () => {
  console.log('Server đang chạy trên http://localhost:3000');
});