import React, { FC } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

interface iProps {
    image?: any
    size?: number,
    isButton?: boolean,
    onPress(): void
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        margin: 5,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(216,216,216,0.11)',
        borderWidth: 1.5,
        borderColor: 'rgba(200, 200, 200, 0.16)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Icon: FC<iProps> = ({ image, isButton, onPress, size }) => (
  isButton ? 
    (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={image} style={{ width: size, height: size }} resizeMode="contain" />
      </TouchableOpacity>
    ):(
      <View style={styles.container}>
        <Image source={image} style={{ width: size, height: size }} resizeMode="contain" />
      </View>
    )
)

export default Icon

Icon.defaultProps = {
  size: 65
}
