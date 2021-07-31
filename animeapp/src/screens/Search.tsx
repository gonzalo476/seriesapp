import React from 'react'
import { SafeAreaView } from 'react-native'

import { ScreenContainer } from '../components'
import { Text, Box } from '../../constants'

const Search = () => {
    return (
        <ScreenContainer>
            <SafeAreaView />
            <Text color="white">Search</Text>
        </ScreenContainer>
    )
}

export default Search