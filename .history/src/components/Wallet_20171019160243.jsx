import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: undefined,
    };
  }
  updateBalance = event =>
    this.setState({balance: event.target.value});
  deposit = () => this.props.deposit(parseInt(this.state.balance, 10));
  render () {
    return(
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br />
        <input
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button
          onClick={this.deposit}  
          className="btn-deposit"
        >
          Deposit
        </ button>
      </div>
    )
  }
}

export default connect( state => { return { balance: state } }, { deposit })(Wallet);
