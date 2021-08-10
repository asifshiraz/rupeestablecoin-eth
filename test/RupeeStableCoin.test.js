const { accounts, contract } = require('@openzeppelin/test-environment');
const [ owner ] = accounts;
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const myContract = contract.fromArtifact('RupeeStableCoin');

describe('rsc', function () {
  beforeEach(async function () {
    this.token = await myContract.new();
  });

  it('has a name', async function () {
    expect(await this.token.name()).to.equal('RupeeStableCoin');
  });

  it('has a symbol', async function () {
    expect(await this.token.symbol()).to.equal('RSC');
  });

  it('has 18 decimals', async function () {
    expect(await this.token.decimals()).to.be.bignumber.equal('18');
  });

  it('Validate minting', async function () {
    let supply = await this.token.totalSupply()
    expect(supply.toString()).to.equal('0');

    await this.token.mint(owner, 10)

    supply = await this.token.totalSupply()
    expect(supply.toString()).to.equal('10');
  });
});