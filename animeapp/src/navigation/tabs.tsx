import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Bottom tab screens
import Home from '../screens/Home'
import Saved from '../screens/Saved'
import Search from '../screens/Search'

const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

export default TabNavigator