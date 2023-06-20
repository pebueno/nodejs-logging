const express = require('express');
const expressWinston = require('express-winston');
const { transports, format } = require('winston');

const app = express();

app.use(expressWinston.logger({
    transports: [
        new transports.Console()
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()

    )
}))
app.get('/', function (req, res) {
    res.sendStatus(200)
});

const port = 3000;

app.listen(port, () => {
  console.log(`Access server on  http://localhost:${port}`);
});
