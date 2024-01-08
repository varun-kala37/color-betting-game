import React from 'react'
import { Container,Avatar,Typography,Box, Grid } from '@mui/material'
function Promotion() {
    const userName = localStorage.getItem('username'); 

  return (
    <Container sx={{
        width: '100%',
        marginTop: '55px',
        marginBottom:'62px'
    }}>
          <Box sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            width: '100%',
            height: '88px',
            backgroundColor: '#dfe955',
            borderRadius: '10px',
            marginBottom:'15px'

        }}>
               <Grid container>
                       <Grid item sm={6} xs={6} md={6} >
                           <Avatar sx={{ bgcolor: 'orange',marginRight:'4px' }}>{userName[0]}</Avatar> 
                       </Grid>
                       <Grid item sm={6} xs={6} md={6} sx={{textAlign:'left'}}>
                           <Typography sx={{color:'Black'}}>
                             Member: {userName}
                           </Typography>
                       </Grid>
                       <Grid item sm={6} xs={6} md={6}>
                       
                       </Grid>
                       <Grid item sm={6} xs={6} md={6}>
                       <Typography sx={{color:'Black'}}>
                            Agent ID:123456
                       </Typography>
                       </Grid>
               </Grid>
               
       </Box>
       </Container>
  )
}

export default Promotion