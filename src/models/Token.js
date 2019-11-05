const mongoose = require('mongoose')

const TokenSchema = mongoose.Schema({
    title : String, 
    topic : [{
        name :String,
        data : [{
            columns : [{
                index : Number,
                caption : String
            }],
            rows : [{
                field : [{
                    data : String,
                    editable : Boolean,
                    columIndex : Number
                }]
            }]
        }]
    }]
})
module.exports = mongoose.model('Token',TokenSchema)