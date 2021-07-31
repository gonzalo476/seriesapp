import React, { createContext, FC, useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'

interface iProps {
    children?: any
}

const OffLineContext = createContext<boolean | null>(null);

const OffLineProvider: FC<iProps> = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsOnline(state.isConnected)
        })
        return () => unsubscribe()
    }, [])
    return <OffLineContext.Provider value={isOnline}>{ children }</OffLineContext.Provider>
}

export { OffLineContext, OffLineProvider }