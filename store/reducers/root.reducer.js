import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import { authReducer } from './auth.reducer'
import {userReducer} from './user.reducer'
import storage from 'redux-persist/lib/storage'
import {gameReducer} from './gameRPS.reducer'


const persistConfig ={
    key:'root',
    storage,
    whitelist:['authUser','dataUser','gameRPS']
}

const rootReducer = combineReducers({
    // combine semua reducer disini
    authUser:authReducer,
    dataUser:userReducer,
    gameRPS: gameReducer
})

export default persistReducer(persistConfig, rootReducer)
