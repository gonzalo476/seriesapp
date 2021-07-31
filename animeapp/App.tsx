import React from 'react'
import { ThemeProvider } from '@shopify/restyle'

// App Providers
import { OffLineProvider } from './contexts/OffLineContext' 

import { Theme } from './constants'
import Navigator from './src/navigation'

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <OffLineProvider>
          <Navigator />
        </OffLineProvider>
      </ThemeProvider>
    </>
  )
}

export default App
