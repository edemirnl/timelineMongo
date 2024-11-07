const express = require('express');
const Comment = require('../models/comment');

const router = express.Router();

// GET: Tüm yorumları getir ve sayfayı render et
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.render('index', { comments });
  } catch (err) {
    res.status(500).send('Error fetching comments.');
  }
});

// POST: Yorum ekle
router.post('/add-comment', async (req, res) => {
  const { username, message } = req.body;
  try {
    await Comment.create({ username, message });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error saving comment.');
  }
});

module.exports = router;
