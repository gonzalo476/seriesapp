import React, { FC } from 'react'
import { Image, View } from 'react-native'

interface iProps {
  icon?: any
  size?: number
  color?: string
}

const TabIcon: FC<iProps> = props => {
  return (
    <View>
      <Image 
        source={props.icon} 
        style={{ 
          tintColor: props.color,
          width: props.size, 
          height: props.size 
        }}
        resizeMode="contain"
      />
    </View>
  )
}

export default TabIcon

TabIcon.defaultProps = {
  size: 30
}