const supertest = require('supertest');
const Token = require('../../src/models/Token')
const App = require('../../src/config/App')

describe('Tonken requests', () =>{
    it('should return 200 in response', async () =>{
       await Token.create({
        title : 'Algo', 
        topic : [{
            name :'Algo',
            data : [{
                columns : [{
                    index : 1,
                    caption : 'Caption'
                }],
                rows : [{
                    field : [{
                        data : 'Campo',
                        editable : true,
                        columIndex : 1
                        }]
                    }]
                }]
            }]
        })
        const response  = await supertest(App).get('/tokens');
        expect(response.status).toBe(200);
        // expect(response.data.length).not(0);
    });
    it('should return all tokens', async ()=>{
            const response  = await supertest(App).get('/tokens');
        let arr = JSON.parse(response.text);
        console.log(arr);
        expect(arr.length).toBe(1);
    })
})