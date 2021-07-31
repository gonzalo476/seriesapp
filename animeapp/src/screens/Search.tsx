import React from 'react'
import { SafeAreaView, ScrollView, FlatList, View } from 'react-native'

import { ScreenContainer, RoundedImage, SearchBar } from '../components'
import { Text, Box, images } from '../../constants'

import movies from '../../assets/data/movies.json'

const renderItem = ({ item }) => {
  return (
    <View>
      <Text variant="body">{item.titles.canonical}</Text>
    </View>
  )
}

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
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={movies.anime.nodes}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
        </ScreenContainer>
    )
}

export default Search