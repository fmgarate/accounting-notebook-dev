import React from 'react'
import { useState } from 'react'


function TransactionItem({ id, type, amount, effective_date }) {

  const [details, setDetails] = useState(false);

  return (
    <div className={`transaction-item ${type.toLocaleLowerCase()}`}>
      <div className="transaction-summary">
        <a onClick={() => {setDetails(!details)}}>
          <div className="row">
            <div className="col-1 number">
              #{id}
            </div>
            <div className="col-1 type">
              {type}
            </div>
            <div className="col amount">
              ${amount}
            </div>
          </div>
        </a>
      </div>
      {details? (
        <div className="transaction-details">
          <h5>Transaction Details</h5>
          <dl>
            <dt>Number</dt>
            <dd>{id}</dd>
            <dt>Type</dt>
            <dd>{type}</dd>
            <dt>Date</dt>
            <dd>{effective_date}</dd>
            <dt>Amount</dt>
            <dd>${amount}</dd>
          </dl>
        </div>
      ):null}
      <style jsx>{`
        .transaction-summary .amount {
          text-align: right;
        }
        .transaction-summary:hover {
          cursor: pointer;
        }
        .transaction-item {
          border-left: 3px solid;
          padding-left: 5px;
          margin-bottom: 20px;
        }
        .transaction-item.credit {
          border-left-color: green;
        }
        .transaction-item.debit {
          border-left-color: red;
        }
        .transaction-details {
          padding: 10px 12px;
          background: #F5F5F5;
        }
      `}</style>
    </div>
  )
}

export default TransactionItem
