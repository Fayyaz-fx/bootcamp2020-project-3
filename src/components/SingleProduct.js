import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoeDetails } from '../data/Data'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { Outlet } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const SingleProduct = () => {
  const classes = useStyles()
  let { productId } = useParams()

  const { brand, category, name, imageURL, details, itemCode, price } =
    ShoeDetails(productId)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            {<img src={imageURL} alt={name} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Typography variant='h4' component='h2' color='primary'>
              {name}
            </Typography>
            <br />
            <Typography variant='subtitle2' component='h3'>
              {details}
              {details} <br />
              {details}
              {details}
            </Typography>
            <br />
            <Typography variant='h6' component='h2'>
              {brand.toUpperCase()} {' - '} {category}
            </Typography>
            <br />
            <Typography variant='h6' component='h2'>
              {itemCode} <br />
            </Typography>
            <Typography variant='h6' component='h2' color='primary'>
              {price}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  )
}

export default SingleProduct
