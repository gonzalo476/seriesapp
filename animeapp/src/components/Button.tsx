import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '../../constants'

interface iProps {
    text?: string
    onPress(): void
    disabled?: boolean
    color?: string
    textColor?: string
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 42,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

const Button: FC<iProps> = ({ text, color, onPress, disabled, textColor }) => {
    return (
        <TouchableOpacity 
          style={
            [
              styles.buttonContainer, 
              { 
                backgroundColor: color,
                opacity: disabled ? 0.5 : 1
              }
            ]
          }
          onPress={onPress}
          disabled={disabled}
        >
            <Text variant="body" color={textColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

Button.defaultProps = {
    color: 'white'
}