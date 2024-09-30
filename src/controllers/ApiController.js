const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://test.mosquitto.org");
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