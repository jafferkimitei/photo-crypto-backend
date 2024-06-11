// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const userRoutes = require('./routes/userRoutes.js');
const photoRoutes = require('./routes/photoRoutes');

app.use('/api/users', userRoutes);
app.use('/api/photos', photoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
