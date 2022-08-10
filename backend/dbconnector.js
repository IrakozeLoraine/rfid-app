const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rfid-transactions',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('connected to db successfully'))
.catch(err=>console.log('Failed to connect to mongodb',err))

require('./rfid.model');