import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// App Providers
import { OffLineProvider } from './contexts/OffLineContext' 

import { Theme } from './constants'
import Navigator from './src/navigation'

// Apollo CLient
const client = new ApolloClient({
  uri: 'https://kitsu.io/api/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <OffLineProvider>
          <Navigator />
        </OffLineProvider>
      </ThemeProvider>
    </ApolloProvider>
    </>
  )
}

export default App
