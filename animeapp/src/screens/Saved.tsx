import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// App Context
import { OffLineContext } from '../../contexts/OffLineContext'

const Saved = () => {
    const isConnected = useContext(OffLineContext)

    return (
        <View style={styles.container}>
            <Text>{isConnected === false ? 'false' : 'true'}</Text>
        </View>
    )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})