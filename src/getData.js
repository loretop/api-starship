const axios = require('axios');

const getData = async () => {
    const promises = [];
    let index = 1;
    while(index !== null) {
        const prom = await axios.get(`https://swapi.co/api/starships/?page=${index}`);
        console.log(prom)
        promises.push(prom);
        if(prom.data.next == null) {
            index = prom.data.next;
        }
        else index+=1;
    } 
    return promises;
}

module.exports = getData;
