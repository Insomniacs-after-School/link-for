const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { checkConnectionDB } = require('./db/connection');

require('dotenv').config();

const PORT = 9000;

// connection db
checkConnectionDB();

// body-parser middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// middleware cookie-parser
app.use(cookieParser());

// routing
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/', require('./routes/profile'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
