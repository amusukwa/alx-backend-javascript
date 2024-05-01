const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to verify its behavior
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

    // Restore the stub and spy to their original states
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
