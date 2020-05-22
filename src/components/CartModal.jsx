import React from "react"
import { ContextApp } from "../store/reducer"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import CartItem from "./CartItem"
import { useStyles as useCommonStyles } from "../styles/common"
import { Typography, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  productContainer: {
    overflowX: "auto",
    height: 500,
  },
}))

const CartModal = () => {
  const handleClose = () => {
    dispatch({ type: "SET_CART_MODAL_VISIBLE", payload: false })
  }
  const clearCart = () => dispatch({ type: "CLEAR_CART" })
  const {
    dispatch,
    state: { cartModalVisible, cart, currency },
  } = React.useContext(ContextApp)

  const commonStyles = useCommonStyles()
  const classes = useStyles()
  const calcSum = React.useMemo(
    () => cart.reduce((acc, product) => acc + product.price, 0),
    [cart]
  )

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={cartModalVisible}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={cartModalVisible}>
        <Grid container className={classes.paper} direction="column">
          <Grid container alignItems="center" justify="space-between">
            <Grid md={6} item>
              <Typography variant="h5" className={commonStyles.spaceBottom}>
                React Pizza Cart
              </Typography>
            </Grid>
            <Grid
              md={6}
              container
              item
              justify="space-between"
              alignItems="center"
            >
              <Button color="secondary" onClick={clearCart}>
                Clear
              </Button>
              <Button colr="primary">Checkout</Button>
              <Typography variant="h6">{`Total: ${
                currency === "USA"
                  ? `${calcSum}$`
                  : `${Math.round(calcSum * 0.92)}€`
              }`}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.productContainer}
            direction="column"
          >
            {cart.length ? (
              cart.map((product, index) => (
                <CartItem key={`${product.id}${index}`} {...product} />
              ))
            ) : (
              <Typography variant="body2">
                Cart is empty. Please, add some products.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  )
}

export default CartModal
