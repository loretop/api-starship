
const redis = require('redis');

const uploadData = (client, prom) => {
    prom.forEach(values => {
        values.data.results.forEach(element => {
            const key1 = element.name;
            const object = JSON.stringify(element);
            client.set(key1, object, redis.print);
        });
    });
}

module.exports = uploadData;

