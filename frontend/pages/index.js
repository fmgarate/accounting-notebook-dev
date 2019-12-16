import React from 'react'
import Head from 'next/head'

import TransactionList from '../components/TransactionList'


const Home = () => (
  <div className="home">
    <Head>
      <title>Accounting notebook</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    </Head>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Accounting notebook</h1>
        <p className="lead">simple money accounting system</p>
      </div>
    </div>

    <div className="container">
      <TransactionList />
    </div>
  </div>
)

export default Home
