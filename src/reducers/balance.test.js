import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('set a balance', () => {
    const balance = 20;
    expect(balanceReducer( undefined, { type: constants.SET_BALANCE, balance} ))
      .toEqual(balance);
  });
});