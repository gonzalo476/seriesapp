import React from 'react'
import { ThemeProvider } from '@shopify/restyle'

import { Theme } from './constants'
import Navigator from './src/navigation'

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navigator />
      </ThemeProvider>
    </>
  )
}

export default App
