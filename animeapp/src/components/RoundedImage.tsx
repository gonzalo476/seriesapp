import React, { FC } from 'react'
import { Image, View } from 'react-native'

import { images } from '../../constants'

interface iProps {
    image?: any
    size?: any
}

const RoundedImage: FC<iProps> = ({ image, size }) => {
    return (
      <View
        style={{
          height: size,
          width: size,
        }}
      >
        <Image 
          source={image} 
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: size/2,
            }} />
      </View>
    )
}

export default RoundedImage

RoundedImage.defaultProps = {
  size: 30,
  image: images.noImage
}