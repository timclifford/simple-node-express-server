const express = require('express');
const app = express();
const port = 3000;

const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://bd570ccde75b42a7aa34962a1399b096@sentry.io/1761495' });

app.get('/', (req, res) =>
  res.send('Hello World!')
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
