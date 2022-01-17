import { createContext, useReducer } from 'react'
import { CartReducer } from './reducer'

const initialState = {
  items: [],
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  function delItems(id) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    })
  }

  function addItems(id) {
    dispatch({
      type: 'ADD_ITEM',
      payload: id,
    })
  }

  return (
    <CartContext.Provider value={{ items: state.items, delItems, addItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
