import React from 'react'
import { ThemeProvider } from '@shopify/restyle'

import { Theme } from './constants'
import Src from './src'

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Src />
      </ThemeProvider>
    </>
  )
}

export default App
