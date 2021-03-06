import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// App tabs
import AppTabs from './tabs'
import Movie from '../screens/Movie'

const Stack = createStackNavigator()

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={AppTabs} />
                <Stack.Screen name="Movie" component={Movie} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
