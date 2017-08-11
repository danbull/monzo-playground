import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import TransactionDetails from './components/TransactionDetails';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/transaction-details/:transactionId" component={TransactionDetails} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
