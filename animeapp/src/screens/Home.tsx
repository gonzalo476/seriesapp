import React from 'react'
import { ScrollView, StyleSheet, StatusBar, Platform } from 'react-native'

import { Text, Box, images, icons } from '../../constants'
import { ScreenContainer, RoundedImage, Icon, GlassCard } from '../components'

const styles = StyleSheet.create({
  scrollStyles: { 
    flex: 1, 
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
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
              <Box>
                <GlassCard width="80%" icon={icons.education}>
                  <Text variant="title3">Education</Text>
                  <Text variant="subhead" textAlign="center">
                    Graduated Software Engineer from Universidad de Colima, México. 
                    Involved in Mobile development and Web aplications.
                  </Text>
                </GlassCard>
              </Box>
            </Box>
            <Box width="100%" height={150}/>
          </ScrollView>
        </ScreenContainer>
    )
}

export default Home
