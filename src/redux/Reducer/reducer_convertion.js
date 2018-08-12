const initialState = { isAdding: false, isAdded: false, isEditing: false, isEdited: false, isDeleting: false, isDeleted: false, listConvertedCurrency: {} }

export function Convertion(state = initialState, action) {
  switch (action.type) {
    case 'CONVERTION_ADDING':
      return {...state, isAdding: true, isAdded: false}
    case 'CONVERTION_ADDED':
      return {...state, isAdding: false, isAdded: true, listConvertedCurrency: action.payload}
    case 'CONVERTION_EDITING':
      return {...state, isEditing: true, isEdited: false}
    case 'CONVERTION_EDITED':
      return {...state, isEditing: false, isEdited: true, listConvertedCurrency: action.payload}
    case 'CONVERTION_DELETING':
      return {...state, isDeleting: true, isDeleted: false}
    case 'CONVERTION_DELETED':
      return {...state, isDeleting: false, isDeleted: true, listConvertedCurrency: action.payload}
    default:
      return state
  }
}
