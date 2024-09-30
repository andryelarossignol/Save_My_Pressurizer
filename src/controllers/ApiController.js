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

module.exports = (server) => {
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

    return wss
}