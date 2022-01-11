const express = require('express');

const PORT = 3008;
const app = express();

app.get('/', (req, res) => {
    res.send('Api running')
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))