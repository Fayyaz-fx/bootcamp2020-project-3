import React from 'react'
import logo from '../media/logo.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  img: {
    float: 'right',
    marginTop: -350,
  },
  p: {
    fontSize: '1.3rem',
    marginLeft: '5rem',
  },
}))
const About = () => {
  const classes = useStyles()
  return (
    <>
      <div>
        <p className={classes.p}>
          <img src={logo} alt='about us' className={classes.img} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio.
          <br />
          Praesent convallis urna a lacus interdum ut hendrerit risus congue.
          Nunc sag ittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
          libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
          eget tellus gravida venenatis. Integer fringilla congue eros non
          fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
          Mauris quis diam velit.
          <br /> It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
      </div>
      <div></div>
    </>
  )
}

export default About
