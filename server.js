const express = require('express');
const path = require('path');
const http = require('http');
const routes = require('./routes');
const bodyParser = require('body-parser');
const delay = require('express-delay');
const app = express();

app.use(delay(1000, 2000));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api', routes);

app.use('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
server.listen(3000, () => console.log("Server is running on localhost:3000"));
