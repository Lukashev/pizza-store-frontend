import React, { useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { getProductList } from "../api"
import { ContextApp } from "../store/reducer"
import { Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Button } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 30,
  },
  root: {
    maxWidth: 345,
    textAlign: "center",
    margin: "0 auto",
  },
  media: {
    width: 292,
    height: 292,
    margin: "0 auto",
  },
  description: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    paddingLeft: 5,
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const ProductList = () => {
  const classes = useStyles()
  const { state, dispatch } = useContext(ContextApp)
  const { productList = [] } = state

  useEffect(() => {
    getProductList()
      .then(({ result: payload }) => {
        dispatch({ type: "SET_PRODUCT_LIST", payload })
      })
      .catch(console.error)
  }, [])

  return (
    <Grid container spacing={2} className={classes.container}>
      {productList.length ? (
        productList.map((product) => {
          const { title, description, image, price, id } = product
          return (
            <Grid item md={4} lg={3} key={id}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={title}
                />
                <CardContent>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Typography className={classes.price} variant="h4">
                    {price}
                  </Typography>
                  <Button variant="contained" color="secondary">
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      ) : (
        <Typography>Product list is empty...</Typography>
      )}
    </Grid>
  )
}

export default ProductList
