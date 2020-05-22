import React from "react"

export const ContextApp = React.createContext({})

const storageCart = localStorage.getItem("cart")

export const initialState = {
  productList: [],
  user: null,
  currency: "USA",
  cart: storageCart ? JSON.parse(storageCart) : [],
  cartModalVisible: false,
  isLoading: false,
}

export const reducer = (state, action) => {
  let newCart = []
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
    case "SET_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      }
    case "ADD_PRODUCT_TO_CART":
      newCart = state.cart.concat(action.payload)
      localStorage.setItem("cart", JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart,
      }
    case "DELETE_PRODUCT_FROM_CART":
      newCart = state.cart.filter((product) => product.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart,
      }
    case "CLEAR_CART":
      localStorage.removeItem("cart")
      return {
        ...state,
        cart: [],
      }
    case "SET_CART_MODAL_VISIBLE":
      return {
        ...state,
        cartModalVisible: action.payload,
      }
    case "SET_LOADING_STATE":
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
