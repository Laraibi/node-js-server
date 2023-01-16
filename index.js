// console.log("hello");

const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json()); // parse json request body
app.use(express.urlencoded({ extended: true })); // parse x-www-form-urlencoded request body
const data = require('./data.json');
const fs = require('fs');

// const { json } = require('body-parser');
app.get('/', (req, res) => {
    res.send(data);
});
app.post('/person', (req, res) => {
    console.log(req.body);
    let id = 0;
    // data.personas.map((p) => )
    for (let i = 0; i < data.personas.length; i++) {
        id = parseInt(data.personas[i].id) > parseInt(id) ? data.personas[i].id : id
    }
    data.personas.push({
        ...req.body, id: id + 1
    })
    fs.writeFileSync('data.json', JSON.stringify(data));
    // fs.close('')
    res.send(data)
})
app.listen(3000, () => {
    console.log('Server started on port 3000');
});