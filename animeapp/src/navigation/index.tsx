import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// App tabs
import AppTabs from './tabs'

const Stack = createStackNavigator()

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={AppTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
