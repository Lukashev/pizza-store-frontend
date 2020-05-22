import React from "react"
import { ContextApp } from "../store/reducer"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import CartItem from "./CartItem"

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
    height: 500,
    overflowY: "auto",
  },
}))

const CartModal = () => {
  const handleClose = () => {
    dispatch({ type: "SET_CART_MODAL_VISIBLE", payload: false })
  }
  const {
    dispatch,
    state: { cartModalVisible, cart },
  } = React.useContext(ContextApp)
  const classes = useStyles()
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
        <Grid container className={classes.paper}>
          <h2 id="transition-modal-title">React Pizza Cart</h2>
          <Grid container className={classes.productContainer}>
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  )
}

export default CartModal
