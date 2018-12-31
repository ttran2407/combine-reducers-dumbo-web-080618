
import { combineReducers } from 'redux'
import booksReducer from './bookReducer.js'
import authorsReducer from './authorReducer.js'


const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer
