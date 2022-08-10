require('./dbconnector')
const rfidRoutes = require('./rfid.routes')

const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/api/v1/',(req,res)=>{
    res.send('Welcome to rfid transactions app')
})

app.use('/api/v1/rfids', rfidRoutes)

const port = process.env.PORT || 4800
app.listen(port,()=>{console.log(`Server running on port ${port}...`)})