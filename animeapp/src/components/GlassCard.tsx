import React, { FC } from 'react'
import { View, Image, StyleSheet} from 'react-native'

interface iProps {
  children?: any
  icon?: any,
  width?: any
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf:"center"
  }
})

const GlassCard: FC<iProps> = ({ children, width, icon }) => {
  return (
    <View
      style={{
        width: width,
        paddingTop: 50
      }}
    >
      <Image source={icon} style={styles.icon} />
      <View 
      style={{
        backgroundColor: 'rgba(216, 216, 216, 0.11)',
        borderColor: 'rgba(151,151,151,0.21)',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
        paddingBottom: 40,
        borderRadius: 20,
        borderWidth: 1,
        width: '100%',
        zIndex: -1
      }}
      >
        {children}
      </View>
    </View>
  )
}

export default GlassCard

GlassCard.defaultProps = {
  width: '100%'
}
