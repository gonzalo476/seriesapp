import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Components
import { TabIcon } from '../components'

// Import icons
import { icons, palette } from '../../constants'

// Bottom tab screens
import Home from '../screens/Home'
import Saved from '../screens/Saved'
import Search from '../screens/Search'

const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: palette.lightBlue,
        inactiveTintColor: palette.shyBlue,
        showLabel: false,
        style:{backgroundColor: palette.black}
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if(route.name === 'Home') {
            iconName = focused ? icons.home : icons.homeOutline 
          } else if (route.name === 'Search') {
            iconName = icons.face
          } else if (route.name === 'Saved') {
            iconName = focused ? icons.save : icons.saveOutline
          }
          return <TabIcon icon={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
    )
}

export default TabNavigator