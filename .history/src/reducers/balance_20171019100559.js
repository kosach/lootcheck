import * as constants from '../actions/constants';

const balance = ( state = 0, action) => {
  console.log('Action');
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return balance;
  }
}

export default balance;