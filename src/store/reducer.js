import React from "react"

export const ContextApp = React.createContext({})

export const initialState = {
  productList: [],
  user: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
