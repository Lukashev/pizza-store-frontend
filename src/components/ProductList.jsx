import React, { useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { getProductList } from "../api"
import { ContextApp } from "../store/reducer"
import { Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import Product from "./Product"
import Spinner from "./Spinner"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 30,
  },
}))

const ProductList = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(ContextApp)
  const { productList = [], isLoading } = state

  useEffect(() => {
    dispatch({ type: "SET_LOADING_STATE", payload: true })
    getProductList()
      .then(({ result: payload }) => {
        dispatch({ type: "SET_PRODUCT_LIST", payload })
      })
      .catch(console.error)
      .finally((_) => dispatch({ type: "SET_LOADING_STATE", payload: false }))
  }, [dispatch])

  return (
    <Grid
      container
      justify="space-around"
      spacing={2}
      className={classes.container}
    >
      {isLoading && <Spinner />}
      {productList.length ? (
        productList.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <Typography>Product list is empty...</Typography>
      )}
    </Grid>
  )
}

export default ProductList
