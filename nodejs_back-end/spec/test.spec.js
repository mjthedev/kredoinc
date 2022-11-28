const { request } = require("express");



async function apiCall() {

const data = request.get('http:localhost:9000/api/category');

    return data.body.length;
    
}


describe('Testing api', () => {
    it('checking for the type of data coming back', () => {
        expect(apiCall()).toBeGreaterThan(1)
    })
})