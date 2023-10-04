const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Back part')
})

app.listen(5000)