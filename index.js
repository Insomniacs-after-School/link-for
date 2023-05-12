const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 9000;

// body-parser middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// routing
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
