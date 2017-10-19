import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () =>{
  const props = { balance: 20, }
  const wallet = shallow(<Wallet {...prompt} />);
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('display the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 21');
  });
});