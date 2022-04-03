import {createStore,applyMiddleware, combineReducers} from 'redux'
import Logger from 'redux-logger'
import Thunk from 'redux-thunk'
import reducer from './addCategory/reducer'

const red= combineReducers({
    categories:reducer
})

const store = createStore(red,applyMiddleware(Logger,Thunk))

export default store