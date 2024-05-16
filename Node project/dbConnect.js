const mysql = require('mysql')

const dbConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"abc"
})

dbConnection.connect((err) => {
    if(err){
        console.log('Error in connecting')
    return;
    }
    console.log("connected to mysql")
})