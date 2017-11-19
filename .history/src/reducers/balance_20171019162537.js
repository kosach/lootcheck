import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const balance = ( state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return state + action.deposit;  
    case constants.WITHDRAW:
      return state - action.withdrawal;  
    default:
      return state;
  }
}

export default balance;