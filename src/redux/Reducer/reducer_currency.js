const initialState = { isUpdating: false, isUpdated: false, currencies:{} }

export function Currency(state = initialState, action) {
  switch (action.type) {
    case 'CURRENCY_UPDATING':
      return {...state, isUpdating: true, isUpdated: false}
    case 'CURRENCY_UPDATED':
      return {...state, isUpdating: false, isUpdated: true, currencies: action.payload}
    case 'CURRENCY_UPDATE_FAILED':
      return {...state, isUpdating: false, isUpdated: false, currencies: {}}
    default:
      return state
  }
}
