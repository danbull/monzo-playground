import React from 'react';

const TransactionTile = (props) => {
  return (
    <li>
      <a href={`/transaction-details/${props.id}`}>
        <span className="logo">{props.logo !== '' ? <img src={props.logo} alt={props.name}/> : ''}</span>
        <span>{ props.emoji }</span>
      </a>
    </li>
  )
}

export default TransactionTile;
