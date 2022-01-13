import React from 'react'
import ReactPlayer from 'react-player'
import heroVideo from '../media/shoeMian.mp4'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: theme.spacing(8),
    left: 0,
    width: '100%',
    height: '93%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width='100%'
        height='92%'
      />
      <div className={classes.overlay}>
        <Box
          height='100%'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          color='#fff'
        >
          <Typography variant='h2' component='h2' className={classes.title}>
            Shoe Mian
          </Typography>
          <Typography variant='h6' component='h4' className={classes.title}>
            style, comfort and satisfaction guranted
          </Typography>
        </Box>
      </div>
    </section>
  )
}

export default Hero
