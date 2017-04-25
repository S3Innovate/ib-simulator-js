var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://sjlm-mqtt.cloudapp.net')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const testTopic = 'world'

rl.on('line', (input) => {
      client.publish(testTopic, input)
      console.log(`Published '${input} to topic '${testTopic}'`)
})

client.on('connect', function () {
    client.subscribe(testTopic);
    console.log(`Subcribed Topic '${testTopic}'`);
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(`Received '${message}' from topic '${topic}'`)
    if (message == 'stopibs') {
        console.log('Closing...')
        client.end()
        rl.close()
        console.log('Bye.')
    }
})