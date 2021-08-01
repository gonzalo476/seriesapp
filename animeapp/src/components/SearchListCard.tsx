import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { Text, Box } from '../../constants'

interface iProps {
    item?: any
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height: 150,
    },
    line: {
        backgroundColor: 'gray',
        position: 'absolute',
        width: '100%',
        height: 1,
        bottom: 0
    },
    image: {
        width: 100,
        height: '80%',
        borderRadius: 10
    },
    infoContainer: {
        width: 230,
        marginLeft: 10
    }
})
 
const SearchListCard: FC<iProps> = ({ item }) => {
    const { titles, posterImage, description, episodeCount, episodeLength } = item
 
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: posterImage.original.url }} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text variant="title3" numberOfLines={1} marginVertical="s">{titles.canonical}</Text>
                <Text variant="caption1" numberOfLines={4}>{description.en}</Text>
                <Box flexDirection="row" marginVertical="s">
                    <Text variant="caption1" numberOfLines={4}>{episodeCount} Ep | </Text>
                    <Text variant="caption1" numberOfLines={4}>{episodeLength} mins</Text>
                </Box>
            </View>
            <View style={styles.line} />
        </TouchableOpacity>
    )
}

export default SearchListCard