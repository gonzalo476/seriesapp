import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { LogBox } from 'react-native'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// App Providers
import { OffLineProvider } from './contexts/OffLineContext' 
import { SavedItemsProvider } from './contexts/SavedItemsContext'

import { Theme } from './constants'
import Navigator from './src/navigation'

// Apollo CLient
const client = new ApolloClient({
  uri: 'https://kitsu.io/api/graphql',
  cache: new InMemoryCache()
})

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <OffLineProvider>
          <SavedItemsProvider>
            <Navigator />
          </SavedItemsProvider>
        </OffLineProvider>
      </ThemeProvider>
    </ApolloProvider>
    </>
  )
}

export default App
