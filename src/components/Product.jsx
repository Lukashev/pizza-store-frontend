import React from "react"
import { ContextApp } from "../store/reducer"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core"
import { useStyles } from "../styles/product"

const Product = (props) => {
  const { id, title, description, price, image } = props
  const {
    dispatch,
    state: { currency },
  } = React.useContext(ContextApp)
  const classes = useStyles()

  const addToCart = () => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: props })
  }

  return (
    <Grid item md={4} lg={3} key={id}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
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
            {currency === "USA" ? `${price}$` : `${Math.round(price * 0.92)}€`}
          </Typography>
          <Button variant="contained" color="secondary" onClick={addToCart}>
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Product
