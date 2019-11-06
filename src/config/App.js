const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const RouteToken = require('../routes/RouteToken');
//$env:NODE_ENV='test
class App {
    constructor(){
        this.express = express();
        this.middleares();
        this.mongooseConnection();
        this.routes();
    }

    middleares(){
        this.express.use(express.json());
    }

    mongooseConnection(){
        mongoose.connect(`mongodb+srv://raock:raock1234@myclusternode-acbtt.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
            useNewUrlParser : true,
            useUnifiedTopology : true
         })
    }

    routes(){
        this.express.use(RouteToken());
    }
}

module.exports = new App().express;