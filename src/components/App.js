import React from 'react';
import TransactionTile from './TransactionTile';
import apiParams from '../constants';

class App extends React.Component {
  state = {
    transactions: {}
  };

  componentWillMount() {
    const request = fetch(`https://api.getmondo.co.uk/transactions?expand[]=merchant&account_id=${apiParams.account_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiParams.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    request
    .then(data => data.json())
    .then(data => {
      const transactions = data.transactions;

      console.log('transactions', transactions);

      this.setState({
        transactions
      });

    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    if (this.state.transactions!== null && this.state.transactions.length > 0) {
      return (
        <div className="spend-history">
          <ul>
            { this.state.transactions.filter(transaction => transaction.merchant !== null).map(transaction =>
              <TransactionTile id={transaction.id} emoji={transaction.merchant.emoji || '❔'} logo={transaction.merchant.logo } name={transaction.merchant.name }/>
            ) }
          </ul>
        </div>
      )
    }

    return <p>Loading transactions...</p>
  }
}

export default App;
