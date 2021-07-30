import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'

import { Box, images } from '../../constants'

interface iProps {
    children?: any
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute'
    }
  })

const ScreenContainer: FC<iProps> = ({ children }) => {
  return (
      <Box flex={1} backgroundColor='black'>
        <Image source={images.backgroundImage} style={styles.image} />
          { children }
      </Box>
    )
}

export default ScreenContainer