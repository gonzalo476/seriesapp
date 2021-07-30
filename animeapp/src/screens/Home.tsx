import React from 'react'
import { ScrollView, StyleSheet, StatusBar, Platform } from 'react-native'

import { Text, Box, images, icons } from '../../constants'
import { ScreenContainer, RoundedImage, Icon } from '../components'

const styles = StyleSheet.create({
  scrollStyles: { 
    flex: 1, 
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%' 
  }
})

const Home = () => {
    return (
        <ScreenContainer>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <ScrollView style={styles.scrollStyles}>
            <Box 
              alignItems="center"
            >
              <RoundedImage size={150} image={images.profileImage} />
              <Box marginVertical="l" alignItems="center">
                <Text variant="title1" >Gonzalo Rojas</Text>
                <Text variant="caption2" color="gray">React Native Developer/Designer</Text>
              </Box>
              <Box flexDirection="row">
                <Icon image={icons.reactIcon} />
                <Icon image={icons.sketchIcon} />
                <Icon image={icons.jsIcon} />
                <Icon image={icons.mongoIcon} />
              </Box>
              <Box alignItems="center" width="80%" marginVertical="m">
                <Text variant="title3" marginVertical="s">
                  ¿Who the hell is this guy?
                </Text>
                <Text textAlign="center" variant="subhead">
                  Hello!, This is Gonzalo Rojas, a software engineer, 
                  based in México. He is also a Designer with more than 9 years of experience. 
                </Text>
              </Box>
            </Box>
          </ScrollView>
        </ScreenContainer>
    )
}

export default Home
