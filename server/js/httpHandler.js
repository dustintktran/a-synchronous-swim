const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const https = require('https');
const messageList = require('./messageQueue')
const keyPressHandler = require('./keypressHandler')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if(req.method === 'GET') {
    res.writeHead(200, headers);
    console.log('server side gotted')
    res.end(messageList.messages[0]);
    messageList.dequeue();
  }

};


//====================================EDITED STUFF BEGINS HERE

// module.exports.getRequest =   https.get('https://localhost:8080', (resp) => {
//   let data = '';

//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   resp.on('end', () => {
//     console.log(JSON.parse(data));
//   });
// }, (err, data) => {

// });

