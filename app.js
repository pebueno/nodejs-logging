const express = require('express');
const expressWinston = require('express-winston');
const { transports, format } = require('winston');

const app = express();

app.use(
  expressWinston.logger({
    transports: [
        new transports.Console(),
        new transports.File({
            level: 'warn',
            filename: 'logsWarnings.log'
        }),
        new transports.File({
            level: 'error',
            filename: 'logsErrors.log'
        }),
    ],
    format: format.combine(
      format.json(),
      format.timestamp(),
      format.prettyPrint()
    ),
    statusLevels: true
  })
);

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.get('/400', function (req, res) {
  res.sendStatus(400);
});

app.get('/500', function (req, res) {
  res.sendStatus(500);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Access server on  http://localhost:${port}`);
});
