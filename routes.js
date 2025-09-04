const express = require('express');
const router = express.Router();

// Beispielroute für Blogs
router.get('/blogs', (req, res) => {
    res.json({ message: 'Hier ist die Liste der Blogs' });
});

module.exports = router;