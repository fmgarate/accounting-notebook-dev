import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TransactionItem from './TransactionItem'


function TransactionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios("http://localhost:8000/transactions/")
        setData(response.data)
      } catch(error) {
        alert("Unable to get transactions history")
      }
    }
    fetchData();
  }, [])

  return (
    <div className="transaction-list">
      {data.map((item) => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default TransactionList
