const initialState = {
    isSchemeVisible: true
}

export default function sheet(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_SCHEME':
        return {isSchemeVisible : !state.isSchemeVisible }
      default:
        return state
    }
  }    