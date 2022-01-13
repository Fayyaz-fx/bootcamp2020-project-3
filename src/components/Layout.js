import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { shoeList } from '../data/Data'
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
    width: '28%',
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
}))

export default function FullWidthGrid() {
  const classes = useStyles()
  const shoes = shoeList.map((shoe) => {
    return {
      brand: shoe.brand,
      category: shoe.category,
      name: shoe.name,
      imageURL: shoe.imageURL,
      details: shoe.details,
      itemCode: shoe.itemCode,
      price: shoe.price,
    }
  })
  const brands = [...new Set(shoes.map((shoe) => shoe.brand))]

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          {brands.map((brand, index) => {
            return (
              <ul
                key={index}
                style={{
                  listStyleType: 'none',
                  margin: '15px 10px',
                  fontSize: '20px',
                  color: 'blue',
                }}
              >
                <li>{brand}</li>
              </ul>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container item xs={12} spacing={1}>
            {shoes.map((shoe) => {
              return (
                <Paper className={classes.paper}>
                  <h2>{shoe.name}</h2>
                  <img
                    src={shoe.imageURL}
                    alt={shoe.name}
                    width='100%'
                    height='60%'
                  />
                  <h2>{shoe.price}</h2>
                  <Button variant='outlined' color='primary' size='large'>
                    add to cart{' '}
                    <FaOpencart size={25} style={{ marginLeft: '1rem' }} />
                  </Button>
                </Paper>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
