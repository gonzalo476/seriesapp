import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { ScreenContainer, RoundedImage, SearchBar } from '../components'
import { Text, Box, images } from '../../constants'

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
                    onChangeText={text => console.log(text)}
                  />
                </Box>
            <ScrollView>
              <Text>Hello</Text>
            </ScrollView>
        </ScreenContainer>
    )
}

export default Search