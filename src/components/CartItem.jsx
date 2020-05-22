import React from "react"
import { ContextApp } from "../store/reducer"
import Grid from "@material-ui/core/Grid"
import { Typography, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { useStyles } from "../styles/common"

const CartItem = (props) => {
  const classes = useStyles()
  const { id, title, description, image, price } = props
  const {
    state: { currency },
    dispatch,
  } = React.useContext(ContextApp)

  const deleteFromCart = () => {
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: id })
  }

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      direction="row"
      className={classes.spaceBottom}
    >
      <Grid item xs={2}>
        <img src={image} width={100} height={100} alt={title} />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.textCenter}>
        <Typography variant="subtitle1">
          {currency === "USA" ? `${price}$` : `${Math.round(price * 0.92)}€`}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={deleteFromCart}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItem
