import React from 'react'
import { Container, Grid, Button, } from '@mui/material';
import bdg from '../../asset/image/bdg1.png';
function HomeHeader() {
  return (
    <Container maxWidth="lg" style={{ width: '100%' }}
      sx={{
        position: 'fixed',
        zIndex: 1,
        bgcolor: '#3d3636',
        top: 0,
        right: 0,
        left: 0
      }}>

      <Grid container spacing={2}  >
        <Grid item xs={4} sm={4} md={4} lg={4} justifyContent="center" container>
          <img src={bdg}></img>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeHeader