import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

// initialize a GraphQL client

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`

// create a component that renders a select input for coutries
function App() {
  const [country, setCountry] = useState('US')
  const { data, loading, error } = useQuery(LIST_COUNTRIES)

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>
  }

  return (
    <select
      value={country}
      onChange={(event) => setCountry(event.target.value)}
    >
      {data.countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  )
}

export default App
