const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
// start() (from update.js)

app.post('/messages', (req, res) => {
    let data = req.body
    console.log('Received request:', data); // Log the entire request body
    // update(data.accel, [0,0], [0,0,0,0,0], [data.lat, data.lon], [32.777, 35.022], data.speed)
    //(from update.js)


    res.send('Message received');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
