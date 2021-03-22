import {combineReducers, configureStore} from "@reduxjs/toolkit"
import reduxToolkit from "./reduxToolkit"


const rootReducer = combineReducers({
   toolkit:reduxToolkit
})

export const store = configureStore({reducer:rootReducer})

export type RootState = ReturnType<typeof rootReducer>