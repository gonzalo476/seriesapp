import React, { FC } from 'react'
import { View, StyleSheet, ImageBackground, Button, ScrollView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from '@apollo/client'

import findByIdQuery from '../graphql/queries/findById.query'

import { Text, Box, images } from '../../constants'
import { Loader, Rating, UIButton, PosterImage } from '../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageContainer: {
        width: '100%',
        height: 300,
        justifyContent: "flex-end"
    } 
})

const Movie = ({ route, navigation }) => {
    const { id, title } = route.params;

    const { data, loading } = useQuery(
        findByIdQuery,
        { variables: { id: id } }
    )

    const missingImage = "/cover_images/original/missing.png";

    function Content() {
      return(
        <>
        { data.findAnimeById === null ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Box width={200}>
              <Text variant="body" textAlign="center">Sorry! This movie is currently unavailable</Text>
              <Button title="Go Back" onPress={() => navigation.goBack()} />
            </Box>
          </Box>
        ) : (MovieComponent())}
        </>
      )
    }

    function MovieComponent(){
      const { episodeCount, episodeLength, description, posterImage, bannerImage } = data.findAnimeById;
      return (
        <ScrollView>
          <ImageBackground
            source={
              bannerImage.original.url === missingImage 
              ?
              { uri: posterImage.original.url }
              :
              { uri: bannerImage.original.url }
            }
            style={styles.imageContainer}
            imageStyle={styles.image}
          >
            <Box position="absolute" bottom={0} zIndex={10}>
              <Text variant="title1" padding="l" numberOfLines={3}>{title}</Text>
            </Box>
            <LinearGradient 
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[
                'transparent',
                'black'
              ]}
              style={{
                height: 200,
                justifyContent: "flex-end"
              }}
            />
          </ImageBackground>
          <Box marginHorizontal="l">
            <Box flexDirection="row" alignItems="center">
                <Rating rating={data.findAnimeById.averageRating}/>
                <Text variant="body" marginLeft="s">{episodeCount} Ep</Text>
                <Text variant="body" marginHorizontal="s">|</Text>
                <Text variant="body">{episodeLength} mins</Text>
            </Box>
            <Box marginVertical="l">
              <UIButton 
                text="Play Episode" 
                onPress={() => {}} 
                color="#159DD5" 
              />
              <Box marginVertical="s">
                <UIButton 
                  text="See Trailer" 
                  textColor="black" 
                  onPress={() => {}} 
                  color="white" disabled
                />
              </Box>
            </Box>
            <Box>
              <Text variant="title3">Synopsis</Text>
              <Box marginVertical="s">
                <Text variant="body">{description.en}</Text>
              </Box>
            </Box>
            <Text variant="title3" marginVertical="s">Poster</Text>
            <PosterImage imageUrl={posterImage.original.url} />
          </Box>
          <Box height={50}/>
        </ScrollView>
      )
    }

    return (
        <View style={styles.container}>
            {loading ? (
              <Box justifyContent="center" alignItems="center" flex={1}>
                <Loader />
              </Box>
            ) : (
              Content()
            )}
        </View>
    )
}

export default Movie
