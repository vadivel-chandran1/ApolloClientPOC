/* eslint-disable no-undef */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { useQuery, ApolloProvider } from '@apollo/client'
import { client } from './apolloclient'
import { PAYEE_DETAILS } from './grapqlqueries'

// create a component
function PayeeDetails() {
  const payeeId = '2'

  const payeeSource = 'DIY'
  const { data, loading, error } = useQuery(PAYEE_DETAILS, {
    variables: { payeeSource, payeeId }
  })
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>
  }

  return <div>{JSON.stringify(data)}</div>
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <PayeeDetails />
  </ApolloProvider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
