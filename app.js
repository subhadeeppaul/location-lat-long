const express = require('express');
const routes = require('./routes/routes');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;


app.use(routes)


const start = async () => {

    try{
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    }catch (error) {
        console.log(error);
    }

};

start();