var expect = require('chai').expect;

var calculateHighScore = require('../calculateHighScore');

describe('calculateHighScore', function(){
  it('returns a highScore', function(){
    expect(calculateHighScore(1, 2)).to.equal(2);
    expect(calculateHighScore(20, 20)).to.equal(20);
    expect(calculateHighScore(200, 2)).to.equal(200);
  });
});