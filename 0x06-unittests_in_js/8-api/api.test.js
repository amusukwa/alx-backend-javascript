// api.test.js

const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', function() {
  it('should return correct status code', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // You can add more tests for other scenarios or edge cases
});
