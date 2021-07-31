import React, { FC, useRef, useEffect } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import EasyToast, { DURATION } from 'react-native-easy-toast'
import { Text } from '../../constants';

interface iProps {
    shown?: boolean
    text?: any
    bgColor?: string
}

const Toast: FC<iProps> = ({ text, shown, bgColor }) => {
  const toastRef = useRef();

  useEffect(() => {
    if(shown === false ) {
      toastRef.current.show(text, 5000)
    } else {
      null
    }
  }, [shown])

    return(
      <View
        style={{ zIndex: 10, elevation: 10 }}
      >
        <EasyToast
          ref={toastRef}
          style={{
            backgroundColor: bgColor, 
            width: '90%'
          }}
          fadeInDuration={750}
          fadeOutDuration={1000}
          textStyle={{color:'black'}}
        />
      </View>
    )
}

export default Toast