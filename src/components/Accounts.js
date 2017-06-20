import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as accountsActions from '../actions/accounts';

class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBalance: 0
    }
  }

  onBalanceChange = (ev) => {
    const newBalance = parseInt(ev.target.value, 10);

    this.setState({ newBalance });
  }

  addAccount = () => {
    const { newBalance } = this.state;

    if (!newBalance) return;

    this.props.actions.addAccount(newBalance);
    this.setState({ newBalance: 0 });
  }

  render() {
    const { newBalance } = this.state;
    const { accounts  } = this.props;

    const accountsList = accounts.map((account, idx) => {
    return <div key={idx}>Balance: {account.balance}</div>;
  });

  return (
    <div className="accounts">
      <h2>Accounts</h2>
      <div className="count">Count: {accounts.length}</div>
      <div className="add-account-field">
        <span>Balance: </span>
        <input type="number" value={newBalance} onChange={this.onBalanceChange} />
        <button type="button" onClick={this.addAccount} className="submit-account">Submit</button>
      </div>
      <div className="accounts-list">
        {accountsList}
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state, props) => {
  return {
    accounts: state.accounts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(accountsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);