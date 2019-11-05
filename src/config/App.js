const express = require('express');
const mongoose = require('mongoose');
const RouteToken = require('../routes/RouteToken');

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
        mongoose.connect('mongodb+srv://raock:raock1234@myclusternode-acbtt.mongodb.net/my_base?retryWrites=true&w=majority',{
            useNewUrlParser : true,
            useUnifiedTopology : true
         })
    }

    routes(){
        this.express.use(RouteToken(express.Router()));
    }
}

module.exports = new App().express;