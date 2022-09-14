import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from "redux";
import scoreReducer from "./reducers/scoreReducer";


const rootReducer = combineReducers({
    scoreReducer: scoreReducer
})


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleWare) => {
            return [...getDefaultMiddleWare({
                serializableCheck: false
            })]
        }
    }
)


const persistor = persistStore(store);


export {
    store,
    persistor
}