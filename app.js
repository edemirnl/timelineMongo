const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://eedemirnl:8obP3Bwg3YBjpgC3@cluster0.5tinu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: true })); // Form verilerini almak için
app.use(express.static(path.join(__dirname, 'public'))); // Statik dosyalar
app.set('view engine', 'ejs');

// Rotalar
app.use('/', commentRoutes);

// Sunucu
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
