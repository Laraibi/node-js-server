// console.log("hello");

const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

const personnas = require('./data.json');
app.get('/', (req, res) => {
    res.send(personnas);
});
app.post('/personas',())
app.listen(3000, () => {
    console.log('Server started on port 3000');
});