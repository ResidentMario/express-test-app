const express = require('express');
const app = express();
const port = 3000;

app.use('/', function (req, res, next) {
    console.log('Time: %d', Date.now());
    res.locals.meta = 'Foo Bar'
    next();
});
app.get('/', (req, res) => res.send(`Hello ${res.locals.meta}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
