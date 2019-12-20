const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const getData = require('./getData');
const uploadData = require('./uploadData');


const app = express();
const PORT = 3000;


const client = redis.createClient();

app.use(bodyParser.json());

app.get('/loadData', async (req, res) => {
    const promises = await getData();
    uploadData(client, promises);
    res.send(200);
})

app.post('/getData', (req, res) => {
    client.get(req.body.name, function(err, reply) {
        res.json(JSON.parse(reply));
    });
})


app.listen(PORT, () => console.log(`example app listening on ${PORT} !`));