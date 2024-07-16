// myportfolio-backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
// myportfolio-backend/server.js (updated)
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myportfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
