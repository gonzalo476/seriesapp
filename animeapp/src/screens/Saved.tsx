import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useSave } from '../../contexts/SavedItemsContext'

const Saved = () => {
    const items = useSave();

    const MovieItems = () => {
        return(
            items.map((item:any) => (
                <View key={item.id}>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                </View>
            ))
        )
    }

    return (
        <View style={styles.container}>
            {items.length === 0 ? (
                <Text>You dont have saved movies yet!</Text>
            ) : (
                <MovieItems />
            )}
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