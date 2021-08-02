import React, { createContext, useContext, FC, useState } from 'react'
import { useReducer } from 'react'

interface iProps {
    children?: any
}

const SavedStateContext = createContext<any>(null)
const SavedDispatchContext = createContext<any>(null)

// Actions
const reducer = (state = [], action: any) => {
    switch(action.type) {
        case 'SAVE_ITEM':
            return[...state, action.item]
        case 'REMOVE_SAVED_ITEM':
            return state.filter(savedItem => savedItem !== action.item)
        case 'CLEAR_ITEMS':
            return state = []
    }
    return state;
}

export const SavedItemsProvider: FC<iProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer<any>(reducer, [])
    return (
        <SavedDispatchContext.Provider value={dispatch}>
            <SavedStateContext.Provider value={state}>
                {children}
            </SavedStateContext.Provider>
        </SavedDispatchContext.Provider>
    )
}

export const useSave:any = () => useContext(SavedStateContext)
export const useDispatch:any = () => useContext(SavedDispatchContext)
