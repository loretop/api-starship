const getData = require('../src/getData')
const axios = require('axios');

jest.mock('axios')


jest.mock('axios')

const resp = {
    data: {
        next: null,
        results: [
            { 
                name: "Naboo star skiff", 
                model: "J-type star skiff" 
            },
            { 
                name: "Jedi Interceptor", 
                model: "Eta-2 Actis-class light interceptor"
             },
            { 
                name: "arc-170", 
                model: "Aggressive Reconnaissance-170 starfighte" },
            { 
                name: "Belbullab-22 starfighter", 
                model: "Belbullab-22 starfighter" }
        ]
    }

}

describe('getData', () => {

    axios.get.mockResolvedValue(resp);

    it('should get the data from star wars api', async () => {

        const result = await getData();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result).toHaveLength(1);
        expect(Array.isArray(result)).toBeTruthy();
    })
})