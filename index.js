'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

//Setting the port
app.set('port', (process.env.PORT || 5000))

//Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROUTES
app.get('/', function(req, res) {
  res.send("Hi i am a chatbot")
})

//Facebook
app.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === "steffen") {
    res.send(req.query['hub.challenge'])
  }
  res.send("Wrong token")

})

app.listen(app.get('port'), function() {
  console.log("running: port")
})
