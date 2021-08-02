import React from 'react'
import { View, FlatList, SafeAreaView, Alert } from 'react-native'

import { ScreenContainer, MovieCard, IconGlassButton } from '../components'
import { Text, Box, icons } from '../../constants'
import { useSave, useDispatch } from '../../contexts/SavedItemsContext'

const Saved = ({ navigation }) => {
    const items = useSave();
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
      Alert.alert(
        "Delete All",
        "delete all saved movies?",
        [
          {
            text: "Cancel",
          },
          {
            text: "Delete All",
            onPress: () => {dispatch({ type: "CLEAR_ITEMS"})}
          }
        ],
      )
    }

    const MovieItems = () => {
      return(
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={item => <MovieCard {...item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={{ height: '100%'}}
          />
        </View>
      )
    }

    return (
        <ScreenContainer>
            <Box marginHorizontal="l" flex={1}>
              <SafeAreaView />
              <Box marginVertical="s" justifyContent="space-between" flexDirection="row">
                <Text variant="largeTitle">Saved Movies</Text>
                <IconGlassButton icon={icons.trash} onPress={handleDeleteAll}/>
              </Box>
                {items.length === 0 ? (
                  <Box>
                    <Text variant="body">You dont have any added movies!</Text>
                  </Box>
                ) : (
                  <MovieItems />
                )}
            </Box>
        </ScreenContainer>
    )
}


export default Saved