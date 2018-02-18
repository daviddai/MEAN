const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('dist'));
app.route("/").get((request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
server.listen(3000, () => console.log("Server is running on localhost:3000"));
