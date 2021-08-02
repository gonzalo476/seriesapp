import React, { FC } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

interface iProps {
    onPress(): void
    icon?: any,
    tintColor?: string
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        borderRadius: 14,
        backgroundColor: 'rgba(216,216,216,0.9)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 20,
        width: 20,
    }
})

const IconGlassButton: FC<iProps> = ({ onPress, icon, tintColor }) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={icon} style={[styles.icon, { tintColor }]} resizeMode="contain" />
        </TouchableOpacity>
    )
}

export default IconGlassButton