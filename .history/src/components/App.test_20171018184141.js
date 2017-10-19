import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
  it('contains a Wallet component', () => {
    console.log(app.debug());
    expect(app.find('Wallet').exists()).toBe(true);
  });
});