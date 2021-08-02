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
            const list = [...state]
            // Remove just the item that has the same id and store in to the constant
            const newList = list.filter((item) => item.id !== action.item.id)
            return newList
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
