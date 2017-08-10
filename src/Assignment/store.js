const getUserDetails = (state, filter) => {
  switch (filter) {
    case 'GET_USERNAME':
      return state.App.username
    case 'GET_PASSWORD':
      return state.App.password
    default:
      return state
  }
}

export default getUserDetails
