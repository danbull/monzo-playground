import React from 'react';
import apiParams from '../constants';

class TransactionDetails extends React.Component {
  state = {
    transactionDetails: {}
  };

  componentWillMount() {

    const request = fetch(`https://api.getmondo.co.uk/transactions/${this.props.params.transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiParams.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    request
      .then(data => data.json())
      .then(data => {
        const transactionDetails = data.transaction;
        this.setState({
          transactionDetails
        });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    render() {
      const {category, local_currency, local_amount} = this.state.transactionDetails;

      return (
        <div className="transaction-detail">
          <ul>
            <li>Category: { category }</li>
            <li>Amount: { local_currency }{ local_amount }</li>
          </ul>
        </div>
      )

      return <p>Loading transactions...</p>
    }
  }

export default TransactionDetails;
