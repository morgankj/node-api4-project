require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 9000;

const users = [
    { 
        id: 1,
        name: 'Jamie'
    },
    {
        id: 2,
        name: 'Claire'
    },
    {
        id: 3,
        name: 'Brianna'
    }
];

app.get('/', (req, res) => {
    res.send('<h1>WELCOME, FOOLS</h1>');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/register', (req, res) => {
    const newUser = { id: Date.now(), name: req.body.name, password: req.body.password };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.post('/login', (req, res) => {
    res.status(200).json({ message: 'You have logged in' });
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
