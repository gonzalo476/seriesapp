import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Text, Box, images } from '../../constants'
import { ScreenContainer, RoundedImage } from '../components'

const styles = StyleSheet.create({
  scrollStyles: { 
    flex: 1, 
    paddingTop: '30%' 
  }
})

const Home = () => {
    return (
        <ScreenContainer>
          <ScrollView style={styles.scrollStyles}>
            <Box 
              alignItems="center"
            >
              <RoundedImage size={150} image={images.profileImage} />
              <Box marginVertical="l" alignItems="center">
                <Text variant="title1" >Gonzalo Rojas</Text>
                <Text variant="caption2" color="gray">React Native Developer/Designer</Text>
              </Box>
            </Box>
          </ScrollView>
        </ScreenContainer>
    )
}

export default Home
