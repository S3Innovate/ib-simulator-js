var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://sjlm-mqtt.cloudapp.net')

client.on('connect', function () {
    client.subscribe('world')
    client.publish('world', 'Hello mqtt')
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    if (message == 'stopibs') {
        client.end()
    }
})