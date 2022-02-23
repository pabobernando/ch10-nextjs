import {createStore,applyMiddleware,} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';



// membuat store 
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export const persistor= persistStore(store)

export default {store,persistor}