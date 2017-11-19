import * as constants from './constants';
import * as actions from './balance';

it('creates an action to sat the balance', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

