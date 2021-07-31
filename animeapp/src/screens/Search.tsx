import React from 'react'
import { SafeAreaView, ScrollView, FlatList, View } from 'react-native'

import { ScreenContainer, RoundedImage, SearchBar, MovieCard } from '../components'
import { Text, Box, images } from '../../constants'

import movies from '../../assets/data/movies.json'

const handleReachEnd = () => (
  console.log('end reached')
)

const Search = () => {
    return (
        <ScreenContainer>
            <SafeAreaView />
                <Box
                  flexDirection="row" 
                  justifyContent="space-between"
                  alignItems="center"
                  marginHorizontal="m"
                  marginTop="l"
                >
                  <Text color="white" variant="largeTitle">Welcome!</Text>
                  <RoundedImage size={40} image={images.face}/>
                </Box>
                <Box 
                  marginHorizontal="m"
                  marginVertical="l"
                >
                  <SearchBar 
                    onFocus={() => console.log('focused')}
                    onChangeText={(text: any) => console.log(text)}
                  />
                </Box>
                <Box marginHorizontal="l">
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={movies.anime.nodes}
                    renderItem={item => <MovieCard {...item}/>}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    ListFooterComponent={<Box width="100%" height={220}/>}
                    onEndReached={handleReachEnd}
                  />
                </Box>
        </ScreenContainer>
    )
}

export default Search