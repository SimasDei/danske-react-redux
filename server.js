const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/person', require('./routes/api/person'));
app.use('/api/facility', require('./routes/api/facility'));
app.use('/api/exposure', require('./routes/api/exposure'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
