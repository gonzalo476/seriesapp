import React, { useState, useCallback } from 'react'
import { View, StyleSheet, ImageBackground, Button, ScrollView, Platform, Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from '@apollo/client'

import { useDispatch } from '../../contexts/SavedItemsContext'

import findByIdQuery from '../graphql/queries/findById.query'

import { Text, Box, icons } from '../../constants'
import { Loader, Rating, UIButton, PosterImage, IconGlassButton } from '../components'

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
    },
    buttonsContainer: {
      justifyContent: 'space-between',
      position: 'absolute',
      flexDirection: 'row',
      zIndex: 10,
      top: Platform.OS === 'ios' ? 44 : 10,
      left: 20,
      right: 20
    }
})

const Movie = ( props:any ) => {
    const { route, navigation } = props
    const [toggleSaveItem, setToggleSaveItem] = useState<boolean>(false)
    const { id, title } = route.params;
    const dispatch = useDispatch()

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
      const { 
        episodeCount, 
        episodeLength, 
        description, 
        posterImage, 
        bannerImage, 
        youtubeTrailerVideoId 
      } = data.findAnimeById;

      const handleSaveItem = () => {
        setToggleSaveItem(!toggleSaveItem)
        const item = {id, title, posterImage, episodeLength, episodeCount}
        dispatch({ type: "SAVE_ITEM", item })
      }

      const handleOpenYoutubeVideo = () => (
         Linking.canOpenURL(`vnd.youtube://www.youtube.com/watch?v=${youtubeTrailerVideoId}`)
         .then(suported => {
           if(suported) {
             Linking.openURL(`vnd.youtube://www.youtube.com/watch?v=${youtubeTrailerVideoId}`)
           } else {
             Linking.openURL(`https://www.youtube.com/watch?v=${youtubeTrailerVideoId}`)
           }
         })
      )

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
            <View style={styles.buttonsContainer}>
              <IconGlassButton icon={icons.chevronLeft} onPress={() => navigation.goBack()} />
              <Box>
                <Box marginBottom="s">
                  <IconGlassButton icon={icons.share} onPress={() => {}} />
                </Box>
                <IconGlassButton 
                  icon={toggleSaveItem ? icons.save : icons.saveOutline} 
                  onPress={handleSaveItem} 
                  tintColor={toggleSaveItem ? "#1CA8E2" : "white"}
                />
              </Box>
            </View>
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
                  onPress={handleOpenYoutubeVideo} 
                  color="white" 
                  disabled={
                    youtubeTrailerVideoId === null ?
                    true : false
                  }
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
