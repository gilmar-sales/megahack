const server = require("./app").server;

server.listen(process.env.PORT || 3333);
