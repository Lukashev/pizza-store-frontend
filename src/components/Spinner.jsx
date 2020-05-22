import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { CircularProgress } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}))

const Spinner = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <CircularProgress color="secondary" size={72} />
    </Grid>
  )
}

export default Spinner
