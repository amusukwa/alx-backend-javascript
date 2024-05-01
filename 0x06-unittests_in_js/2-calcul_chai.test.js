// 2-calcul_chai.test.js

const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

// Using Chai's expect syntax
const expect = chai.expect;

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
