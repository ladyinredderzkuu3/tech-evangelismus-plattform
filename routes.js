const express = require('express');
const router = express.Router();

// Beispielroute für Blogs
router.get('/blogs', (req, res) => {
    res.json({ message: 'Liste der Blogs' });
});

module.exports = router;
