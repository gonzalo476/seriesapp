import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useQuery } from '@apollo/client'

import { 
  ScreenContainer, 
  RoundedImage, 
  SearchBar, 
  MovieCard, 
  Loader, 
  SearchList 
} from '../components'
import { Text, Box, images } from '../../constants'

// Query
import getMoviesQuery from '../graphql/queries/getMovies.query'

const Search = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const { loading, data } = 
    useQuery(
      getMoviesQuery,
      { 
        variables: { first: 20, cursor: "" },
      }
  );

  const openList = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  function renderFooter() {
    return(
      <>
        { loading ? (
          <Box>
            <Loader />
            <Box width="100%" height={420} />
          </Box>
        ) : null }
      </>
    )
  }

  function MoviesList() {
    return (
      <>
        { loading ? (
          <Loader />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.anime.nodes}
            renderItem={item => <MovieCard {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListFooterComponent={renderFooter()}
          />
        )}
      </>
    )
  }

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
                    onFocus={openList}
                    onBlur={onBlur}
                    onChangeText={(text: any) => setSearch(text)}
                  />
                </Box>
                <Box marginHorizontal="l">
                  {isFocused ? (
                    <SearchList search={search} navigation={navigation} />
                  ) : (
                    MoviesList()
                  )}
                </Box>
        </ScreenContainer>
    )
}

export default Search