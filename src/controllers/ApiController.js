const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://119.8.14.205");
let mqttMessage = "";



class ApiController {
    ApiController() {
        client.on("message", (topic, message) => {
            if (topic === "sensor/state") {
                console.log("message: " + message)
                mqttMessage = message;
            }
        });
    }
    async getMessage(request, response) {
        return response.json(mqttMessage);
    }

}

module.exports = ApiController;