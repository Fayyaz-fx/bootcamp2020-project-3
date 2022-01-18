import { getProducts, getBrands } from '../data/Data'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../context/CartContext'
import React, { useContext, useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Button } from '@material-ui/core'
import { FaOpencart } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    marginTop: '-50px',
  },
  paper: {
    padding: theme.spacing(2),
    direction: 'row',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '15%',
    height: '100%',
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
}))

const ProductsList = () => {
  const [items, setItems] = useState('')
  const { addItems } = useContext(CartContext)
  useEffect(() => {
    addItems(items)
  }, [items])
  const classes = useStyles()
  let products = getProducts()
  let brands = getBrands()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <h4 style={{ marginLeft: '2rem' }}>Brands</h4>
          {brands.map((brand, index) => {
            return (
              <>
                <ul
                  key={index}
                  style={{
                    listStyleType: 'none',
                    margin: '8px 10px',
                    fontSize: '20px',
                    color: 'blue',
                  }}
                >
                  <li style={{ fontSize: '0.8rem' }}>{brand.toUpperCase()}</li>
                </ul>
              </>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container item xs={12} spacing={1}>
            {' '}
            {products.map((shoe, index) => {
              const { name, imageURL, price, itemCode } = shoe
              return (
                <Paper className={classes.paper} key={index}>
                  <Link to={`${itemCode}`}>
                    <h2>{name}</h2>
                    <img src={imageURL} alt={name} width='70%' height='50%' />
                    <h2>AED {price}</h2>
                  </Link>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => {
                      setItems(itemCode)
                      alert(`${name} for AED ${price} added to the cart`)
                    }}
                  >
                    add to cart{' '}
                    <FaOpencart size={25} style={{ marginLeft: '1rem' }} />
                  </Button>
                </Paper>
              )
            })}{' '}
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  )
}

export default ProductsList
