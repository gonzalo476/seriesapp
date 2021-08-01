import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useQuery, useLazyQuery } from '@apollo/client'

import { ScreenContainer, RoundedImage, SearchBar, MovieCard, Loader, SearchList } from '../components'
import { Text, Box, images } from '../../constants'

// Query
import getMoviesQuery from '../graphql/queries/getMovies.query'

const Search = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const { loading, data } = useQuery(
    getMoviesQuery,
    { variables: { first: 20 } }
  );

  const openList = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
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
            renderItem={item => <MovieCard {...item}/>}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListFooterComponent={<Box width="100%" height={220}/>}
            onEndReached={() => {}}
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
                    <SearchList search={search}/>
                  ) : (
                    MoviesList()
                  )}
                </Box>
        </ScreenContainer>
    )
}

export default Search