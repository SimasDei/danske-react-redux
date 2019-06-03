const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Api running!'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
