import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const props = { balance: 20, deposit: mockDeposit }
  const wallet = shallow(<Wallet {...props} />);
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })
  it('display the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });
  it('creates an input to deposit or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  it('when the user types into the wallet input', () => { 
    const userBalance = 25;
    beforeEach(() => { 
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });
    it('update the local wallet balance in `state` and converts it to a number', () => { 
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });
  });

});