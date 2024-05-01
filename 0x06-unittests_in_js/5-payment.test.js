// 5-payment.test.js

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Create a spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    // Call the function with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    // Verify that console.log was only called once
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the correct total for 10 and 10', function() {
    // Call the function with 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');

    // Verify that console.log was only called once
    sinon.assert.calledOnce(consoleSpy);
  });
});
