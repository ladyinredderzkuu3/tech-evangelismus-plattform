const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Tech Evangelism Platform - Your journey starts here!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});