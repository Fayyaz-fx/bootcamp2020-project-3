export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [action.payload, ...state.items],
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => {
          if (item === '') {
            return item
          } else {
            return item !== action.payload
          }
        }),
      }
    default:
      return state
  }
}
