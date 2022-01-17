import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

export default function Footer() {
  return (
    <AppBar position='static' color='primary' style={{ marginTop: 20 }}>
      <Container maxWidth='md'>
        <Toolbar>
          <Typography
            variant='body1'
            color='inherit'
            style={{ margin: 'auto' }}
          >
            © 2022 Shoe Mian
          </Typography>
          <Typography
            variant='body1'
            color='inherit'
            style={{ margin: 'auto' }}
          >
            Developed by: BizzTechs
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
