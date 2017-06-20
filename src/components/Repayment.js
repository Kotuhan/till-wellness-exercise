import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart'

class Repayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthPayment: 0
    }
  }

  onMonthPaymentChange = (ev) => {
    const monthPayment = parseInt(ev.target.value, 10);

    this.setState({ monthPayment });
  }

  render() {
    const { monthPayment  } = this.state;
    const { accountsSum  } = this.props;

    return (
    <div className="repayment">
      <h4>Initial Balance: {accountsSum}</h4>
      <div className="monthly-payment">
        <span>Monthly payment: </span>
        <input type="number" value={monthPayment} onChange={this.onMonthPaymentChange} />
      </div>
      <hr />
      <Chart monthPayment={monthPayment || 0} accountsSum={accountsSum || 0} />
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const accountsSum = state.accounts.reduce((a, b) => a + b.balance, 0);

  return {
    accountsSum
  };
}

export default connect(mapStateToProps, null)(Repayment);