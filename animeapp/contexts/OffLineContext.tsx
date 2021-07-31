import React, { createContext, FC, useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import { Toast } from '../src/components'
import { icons } from '../constants';

interface iProps {
  children?: any
}

const OffLineContext = createContext<boolean | null>(null);

function notConnected() {
  return (
    <View style={{flexDirection: 'row', alignContent: 'center'}}>
      <Image 
        source={icons.alertCircle} 
        style={{ 
          width: 20, 
          height: 20, 
          marginEnd: 10, 
          tintColor: 'black'
          }} 
        resizeMode='contain' 
      />
      <Text>No internet connection</Text>
    </View>
  )
}

const OffLineProvider: FC<iProps> = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsOnline(state.isConnected)
        })
        return () => unsubscribe()
    }, [])
    return (
        <> 
        <OffLineContext.Provider value={isOnline}>
          <Toast 
            shown={isOnline} 
            text={notConnected()}
            bgColor="red"
          />
            { children }
        </OffLineContext.Provider>
        </>
    )
}

export { OffLineContext, OffLineProvider }