require('express-async-errors')
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')
const cors = require("cors")

migrationsRun()

const app = new express()
app.use(express.json())

app.use(cors())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT= 3333;
const server = app.listen(PORT,()=> console.log(`Server is runing on Port ${PORT} with mqtt`));

const mqtt = require("mqtt")
const WebSocket = require('ws')

const client = mqtt.connect("mqtt://test.mosquitto.org")

client.subscribe("sensor/state", (err) => {
    if(err) {
        console.log("Error")
    }
})

function onMessage(ws) {
    client.on("message", (topic, message) => {
        ws.send(message.toString())
    })
}
const wss = new WebSocket.Server({
    server
})

wss.on('connection', (ws) => {
    console.log('New WebSocket connection')
    onMessage(ws)

    ws.on('close', () => {
        console.log('WebSocket connection closed')
    })
})

