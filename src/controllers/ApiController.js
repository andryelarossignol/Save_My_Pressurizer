const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://119.8.146.205");
let mqttMessage = "";

client.on("message", (topic, message) => {
    if (topic === "sensor/state") {
        console.log("message: " +message)
        mqttMessage = message;
    }
});

class ApiController {
    async getMessage(request, response) {
        return response.json(mqttMessage);
    }

}

module.exports = ApiController;