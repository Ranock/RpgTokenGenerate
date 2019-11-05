const Token = require('../models/Token')

module.exports ={
    async index(req, res){
        const tokens = await Token.find({})
        res.json(tokens);
    },
    async store(req, res){
        req.body;
        let token = await Token.create(req.body);
        res.send(token);
    }
}