require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get('/users', (req, res) => {});

app.post('/register', (req, res) => {});

app.post('/login', (req, res) => {});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
