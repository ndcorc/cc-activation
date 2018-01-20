"use strict";

var Components = require('./components.js');

// Create a server instance
var server = Components('/components');

// Start the server listening..
server.listen(process.env.SERVICE_PORT || 8111);
logger.info('* Running on http://0.0.0.0:8111' + urlPath);
