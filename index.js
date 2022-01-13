require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get('/users', (req, res) => {
    res.status(200).json({ message: 'Here is where you would get a list of users' });
});

app.post('/register', (req, res) => {
    res.status(201).json({ message: 'Here is your response after registering an account' });
});

app.post('/login', (req, res) => {
    res.status(200).json({ message: 'You have logged in' });
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
