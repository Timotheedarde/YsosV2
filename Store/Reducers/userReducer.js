
const initialState = { userConnected: [] }

function connectUser(state = initialState, action) {
  let nextState
  switch (action.type) {
      case 'CONNECT_USER':
        const userIndex = state.userConnected.findIndex(item => item.id === action.value.id)
        if (userIndex !== -1) {
          nextState = {
            ...state,
            userConnected: state.userConnected.filter( (index) => index !== userIndex)
          }
        }
        else {
          nextState = {
            ...state,
            userConnected: [...state.userConnected, action.value]
          }
        }
        return nextState || state
  default:
    return state
  }
}

export default connectUser

