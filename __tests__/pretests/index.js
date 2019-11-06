const mongoose = require('mongoose');
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const Token = require('../../src/models/Token');


// console.log(process.env.DATABASE)

if (process.env.NODE_ENV === 'test')
    mongoose.connect(`mongodb+srv://raock:raock1234@myclusternode-acbtt.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
        useNewUrlParser : true,
        useUnifiedTopology : true
     }, async () =>{
         console.log('deletando')
        await Token.deleteMany({})
        process.exit();
     })
