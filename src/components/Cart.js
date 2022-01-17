import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import { ShoeDetails } from '../data/Data'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, 30),
  },
  paper1: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3, 10),
    },
  },
  paper2: {
    margin: theme.spacing(5, 25),
  },
}))
const Cart = () => {
  let totalPrice = 0
  const classes = useStyles()
  const { items, delItems } = useContext(CartContext)
  const [shoes, setShoes] = useState([])
  useEffect(() => {
    if (items) {
      setShoes(
        items.map((item) => {
          return ShoeDetails(item)
        })
      )
    }
  }, [items, delItems])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {shoes.map((item, index) => {
              if (item) {
                let { brand, name, imageURL, category, itemCode, price } = item
                totalPrice += +price
                return (
                  <div className={classes.paper1}>
                    <Paper elevation={0}>
                      {
                        <img
                          src={imageURL}
                          alt={name}
                          width='200'
                          height='200'
                        />
                      }
                    </Paper>

                    <Paper elevation={0} className={classes.paper2}>
                      <Typography
                        variant='subtitle2'
                        component='h2'
                        color='primary'
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='h2'
                        color='primary'
                      >
                        {brand.toUpperCase()}
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='h2'
                        color='primary'
                      >
                        {category.toUpperCase()}
                      </Typography>
                      <Typography variant='h6' component='h2' color='secondary'>
                        AED {price}
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='h2'
                        color='primary'
                      >
                        {itemCode}
                      </Typography>
                      <button
                        onClick={() => {
                          delItems(itemCode)
                          alert(`${name} removed from the cart`)
                        }}
                      >
                        <Typography
                          variant='subtitle1'
                          component='h2'
                          color='primary'
                        >
                          Remove Item
                        </Typography>
                      </button>
                    </Paper>
                  </div>
                )
              }
            })}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography
              variant='h6'
              component='h2'
              color='primary'
              style={{ padding: '10px' }}
            >
              Order Summary
            </Typography>
            <Typography
              variant='h5'
              component='h2'
              color='primary'
              style={{ padding: '0 10px' }}
            >
              Total items : {shoes.length}
            </Typography>
            <Typography
              variant='h5'
              component='h2'
              color='primary'
              style={{ padding: '0 10px' }}
            >
              Total amount :{totalPrice}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cart
