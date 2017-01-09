import { combineReducers } from 'redux'
import { todo_reducer } from './reducers'
const initialState = {
  host: '',
  protocol: ''
}

const sourceRequest = (state = initialState, action) => state

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer (asyncReducers) {
  return combineReducers({
    sourceRequest,
    todos : todo_reducer,
    ...asyncReducers
  })
}
