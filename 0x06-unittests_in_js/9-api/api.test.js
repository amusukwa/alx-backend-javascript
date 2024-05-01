const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Cart page', function() {
  it('should return correct status code when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return correct status code when :id is NOT a number', function(done) {
    request.get('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});
