import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={{ margin: 20 }}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}

export default Loader
