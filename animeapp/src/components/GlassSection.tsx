import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'

interface iProps {
    children?: any,
    icon?: any,
    width?: any
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.11)',
    borderColor: 'rgba(72,72,72,0.21)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: -1
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf:"center"
  },
  container: {
    paddingTop: 50,
  }
})

const GlassSection: FC<iProps> = ({ children, width, icon }) => {
    return (
      <View style={[styles.container, { width }]}>
        <Image source={icon} style={styles.image} />
        <View style={styles.wrapper}>
          { children }
        </View>
      </View>
    )
}

export default GlassSection

GlassSection.defaultProps = {
  width: '100%'
}