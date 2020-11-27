'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
let event, context;

describe('Testing /hello', function () {

    // Test function with correct context
    it('must return 200 with response when ANY event given', async () => {
        // Prepare test context
        event = require('../../../events/event.json') ;

        // Execute function with prepared context
        const result = await app.lambdaHandler(event, context)

        // Check return of function, depending on context
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal('hello world');
        expect(response.event).to.be.an('object');
    });

    // Test function with missing verb from event
    it('must return 404 with correct response when INVALID event given', async () => {
        // Prepare test context
        event = {'any':'content', 'should': 'pass'} ;

        // Execute function with prepared context        
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(404);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("No verb given !!");
    });

    // Test function with no event at all
    it('must return 404 with correct response when NO event given', async () => {
        // Prepare test context
        event = null ;

        // Execute function with prepared context        
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(404);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("Event is empty !!");
    });
});
