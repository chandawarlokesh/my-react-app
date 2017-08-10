import { combineReducers } from 'redux'

const App = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
}

const AppReducers = combineReducers({
  App
})

export default AppReducers
