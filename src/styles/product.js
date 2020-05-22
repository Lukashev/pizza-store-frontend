import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    minHeight: 465,
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
