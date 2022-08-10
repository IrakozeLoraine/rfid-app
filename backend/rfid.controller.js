const { rfid_transactions, validateRfid } = require('./rfid.model')

exports.create = (req, res) => {
    const { error } = validateRfid(req.body)
    if(error) return res.send(error.details[0].message).status(400)


    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    let transactionTime=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    let rfidTransactions = new rfid_transactions()

    rfidTransactions.customer = req.body.customer,
    rfidTransactions.initial_balance = req.body.initial_balance
    rfidTransactions.transport_fare = req.body.transport_fare
    rfidTransactions.new_balance = req.body.initial_balance-req.body.transport_fare
    rfidTransactions.time = transactionTime

    if(rfidTransactions.new_balance < 0){
        res.send("Insufficient Balance! Please recharge and try again later").status(403)
        return
    }
    else{

    rfidTransactions.save()
        .then(rfidTransactions => res.send(rfidTransactions).status(201))
        .catch(err => res.send(err).status(400))
    }
}

exports.findAll = (req, res) => {
    rfid_transactions.find()
        .then(rfidTransactions => res.send(rfidTransactions))
        .catch(err => res.send(err).status(404))
}

exports.findOne = ('/:id', (req, res) => {
    rfid_transactions.findById(req.params.id)
        .then(rfidTransactions => res.send(rfidTransactions))
        .catch(err => res.send(err).status(404))
})

exports.delete = ('/:id',(req, res) => {
    rfid_transactions.findByIdAndRemove(req.params.id)
        .then(rfidTransactions => res.send(rfidTransactions))
        .catch(err => res.send(err).status(404));
});