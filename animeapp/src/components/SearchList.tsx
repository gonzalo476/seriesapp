import React, { FC } from "react"
import { FlatList } from 'react-native'
import { useQuery } from '@apollo/client'

// Query
import searchByTitleQuery from "../graphql/queries/searchByTitle.query"

import { Text, Box } from "../../constants"
import SearchListCard from './SearchListCard'
import Loader from './Loader'

interface iProps {
    search?: string
    navigation?: any
}

const SearchList: FC<iProps> = ({ search, navigation }) => {

  const { loading, data } = useQuery(
    searchByTitleQuery,
    { variables: { first: 20, title: search } }
  );

  return (
    <Box height="100%" width="100%">
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.searchAnimeByTitle.nodes}
          renderItem={item => <SearchListCard {...item} navigation={navigation} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<Box width="100%" height={220}/>}
          onEndReached={() => {}}
        />
      )}
    </Box>
  )
}

export default SearchList