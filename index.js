const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json())


const fruits = [
    Banana = { item: 40, price: 10 },
    Apple = { item: 50, price: 100 },
    Orange = { item: 30, price: 120 },
    Pineapple = { item: 60, price: 30 },
];

const users = ['Asad', 'Sadaf', 'Sad', 'Morshed', 'Mazhar', 'Sizan'];

//////////////////GET//////////////////

app.get('/', (req, res) => {

    // res.send('Welcome to port 3000, how you doing ?');
    res.send(fruits);
});

app.get('/fruits/Banana', (req, res) => {

    res.send({ fruits: 'Banana', quantity: 10, price: 10 });
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    console.log(req.query.sort);
    const name = users[id];
    res.send({ id, name });
    console.log(req.params);
})

//////////////POST////////////
app.post('/addUser', (req, res) => {
    console.log('Post request send');
    console.log('Request received', req.body);
    ////////SAVE TO DATABASE//////////////////
    const user = req.body;
    user.id = 55;
    // res.send(req.body);
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));


// http://localhost:3000/users/3?sort=asc&srt