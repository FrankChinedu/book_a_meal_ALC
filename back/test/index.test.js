let assert = require('assert');
let {expect} = require('chai').expect;
let should = require('chai').should();

describe('true should be true', () => {
  it('should be true', () => {
    true.should.be.true;
  });
});
