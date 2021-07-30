import React, { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'

interface iProps {
    image?: any
    size?: number
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
    },
    image: {
        height: 65,
        width: 65
    }
})

const Icon: FC<iProps> = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
    )
}

export default Icon

