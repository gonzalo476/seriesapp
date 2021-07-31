import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { ScreenContainer, RoundedImage } from '../components'
import { Text, Box, images } from '../../constants'

const Search = () => {
    return (
        <ScreenContainer>
            <SafeAreaView />
            <ScrollView>
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
            </ScrollView>
        </ScreenContainer>
    )
}

export default Search