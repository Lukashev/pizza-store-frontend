import React from "react"
import { initialState, reducer, ContextApp } from "./store/reducer"
import PrimarySearchAppBar from "./components/PrimaryAppBar"
import "./App.css"
import ProductList from "./components/ProductList"

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <PrimarySearchAppBar />
      <ProductList />
    </ContextApp.Provider>
  )
}

export default App
