import React, { FC } from 'react'
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { icons } from '../../constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(216,216,216,0.11)',
        borderColor: 'rgba(151,151,151, 0.29)',
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        width: '100%',
        height: 60
    },
    image: {
        width: 18,
        height: 18,
        marginEnd: 10
    },
    inputStyles: {
        color: 'white',
        width: '85%',
        fontFamily: 'Gellix-Regular'
    }
})

const SearchBar = ( props: any ) => {
    return (
        <View style={styles.container}>
            <Image 
                source={icons.search}
                style={styles.image}
                resizeMode="contain"
            />
            <TextInput 
                placeholder="Discover anime series..."
                style={styles.inputStyles}
                placeholderTextColor="#767575"
                returnKeyType="search"
                {...props}
            />
            {props.isFocused ? (
                <TouchableOpacity
                    onPress={props.onPressClose}
                    style={{ marginLeft: 5 }}
                >
                    <Image 
                        source={icons.close}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            ) : null }
        </View>
    )
}

export default SearchBar
