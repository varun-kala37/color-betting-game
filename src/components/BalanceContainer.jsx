import React from 'react'
import { Button, Typography, Grid, Paper, Container, Box, ButtonGroup } from '@mui/material'
import BettingHistory from './BalanceHistory/BettingHistory';

function BalanceContainer() {
  const Balance = localStorage.getItem('WalletBalance');
  return (

    <Box sx={{
      backgroundColor: '  rgba(0, 0, 0, 0.1)',
      width:'100vw',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '109px',
      bottom: 0,
      borderRadius: '10px',
      mb: '0px',
      
    }}>
      <Container
        sx={{
          width: '95%',
          backgroundColor: '#3d3636',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          color: '#a4b943',
          borderRadius: '10px',
          mt: 1,
          mb: '2px'
          // Optional: Add a shadow for separation
        }}


      >
        <Grid container spacing={2} sx={{ mt: '5px' }}>
          <Grid item xs={2} md={2} sm={2} lg={2} sx={{ textAlign: 'left' ,paddingTop:'5px'}} >
            <Typography color={'#c3cf1a'} variant="h12" >Balance:{Balance}
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} sm={10} lg={10} sx={{ 
            textAlign: 'right',          
         }} >
            <ButtonGroup size="small" aria-label="small button group">
            <Button  style={{ backgroundColor: '#396d79', color: 'white' }}>
              Recharge
            </Button>
              <BettingHistory />
            </ButtonGroup>          
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12} sx={{ textAlign: 'center' }} >
            <Typography variant="h12" sx={{ textAlign: 'center', marginTop: '10px', color: '#c3cf1a' }}>Total Betting {Balance} - Total Bet 0</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BalanceContainer