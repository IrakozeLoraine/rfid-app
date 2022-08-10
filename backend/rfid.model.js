const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

var rfidSchema = new mongoose.Schema({  
    customer:{
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    initial_balance:{
        type: String,
        required: true,
        maxlength: 15
    },
    transport_fare:{
        type: String,
        required: true,
        maxlength: 15
    },
    new_balance:{
        type: String,
        required: true,
        maxlength: 15
    },
    time:{
        type: String,
        required: true
    }
})

function validateRfid(rfid){
    const schema = Joi.object({
        customer: Joi.string().max(50).min(3).required(),
        initial_balance: Joi.string().max(15).required(),
        transport_fare: Joi.string().max(15).required(),
        new_balance: Joi.string().max(15)
    })
    return schema.validate(rfid)
}

const rfid_transactions = mongoose.model('rfid_transactions', rfidSchema)

module.exports.rfid_transactions = rfid_transactions;
module.exports.validateRfid = validateRfid;