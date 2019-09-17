const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Twilio 
const { accountSid, authToken } = require('../server/twilio.api');
const client = require('twilio')(accountSid, authToken);
const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

app.use(bodyParser.json());
//app.use(express.static(__dirname + ' FILL_ME_IN'));

// if (process.env.NODE_ENV !== 'test') {
//   app.listen(PORT, () => (console.log(`listening on port ${PORT}!`)));
// }

// Phone Number'+14152026687'

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say('HI RAFE');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');

module.exports = app;