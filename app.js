const express = require('express');
const expressWinston = require('express-winston');
const { transports, format } = require('winston');

const app = express();

app.use(expressWinston.logger({
    transports: [
        new transports.Console()
    ],
    format: format.json() // metadata of our request
}))
app.get('/', function (req, res) {
    res.sendStatus(200)
});

const port = 3000;

app.listen(port, () => {
  console.log(`Access server on  http://localhost:${port}`);
});
