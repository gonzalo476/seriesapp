import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useQuery } from '@apollo/client'

import { ScreenContainer, RoundedImage, SearchBar, MovieCard, Loader } from '../components'
import { Text, Box, images } from '../../constants'

// Query
import getMoviesQuery from '../graphql/queries/getMovies.query'

const handleReachEnd = () => (
  console.log('end reached')
)

function Search({ navigation }) {
  const { loading, data, error } = useQuery(
    getMoviesQuery,
    { variables: { first: 20 } }
  )

  console.log( 'error: ', error);

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
                  { loading ? (
                    <Loader />
                  ) : (
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={data.anime.nodes}
                      renderItem={item => <MovieCard {...item}/>}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
                      ListFooterComponent={<Box width="100%" height={220}/>}
                      onEndReached={() => {}}
                    />
                  )}
                </Box>
        </ScreenContainer>
    )
}

export default Search