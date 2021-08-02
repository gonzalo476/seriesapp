import React, { FC } from 'react'
import { TouchableOpacity, View, StyleSheet, ImageBackground, Dimensions } from 'react-native'

import { Text } from '../../constants'

interface iProps {
  item?: any,
  navigation?: any
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: width / 2.4,
        height: 233,
        margin: 5,
    },
    movieInfoStyles: {
        width: '100%',
        height: '100%',
        justifyContent: "flex-end"
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20
    },
    infoContainer: {
      backgroundColor: 'rgba(0,0,0, 0.8)',
      padding: 8,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: "center"
    },
    rowInfo: {
      flexDirection: "row"
    }
})

const MovieCard: FC<iProps> = ({ item, navigation }) => {
    const { titles,  episodeCount, episodeLength, posterImage, id } = item
    return (
        <TouchableOpacity 
          style={styles.container}
          onPress={() => navigation.navigate("Movie", { id: id, title: titles.canonical })}
        >
            <ImageBackground
              source={{ uri: posterImage.original.url }}
              style={styles.movieInfoStyles}
              imageStyle={styles.image}
            >
              <View style={styles.infoContainer}>
                <Text variant="headline" numberOfLines={2} textAlign="center">{titles.canonical}</Text>
                <View style={styles.rowInfo}>
                  <Text variant="caption1">{episodeCount} Ep | </Text>
                  <Text variant="caption1">{episodeLength} mins</Text>
                </View>
              </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default MovieCard