import React from 'react'
import ImageCarousel from './ImageCarousel';
import { Typography, Box, Container } from '@mui/material';
import CardComponent from './CardComponent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Games from './Games';


function Home() {
    const userName = localStorage.getItem('username');
    const balance = localStorage.getItem('WalletBalance');
  return (
    <Container sx={{
        width: '100%',
        marginTop:'37px'
      }}>
        <ImageCarousel />
        <Container sx={{
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          width: '100%',
          padding:0
        }}>
          <Box sx={{
  
            backgroundColor: '#dfe955',
            borderRadius: '5px',
            color: 'white',
            textAlign:'center',       
            width:'100%'
          }}>
            <Typography sx={{marginTop:'2px'}}>
              <AccountCircleIcon sx={{verticalAlign:'middle',}}/> Username-{userName}-{balance} <MailIcon sx={{verticalAlign:'middle'}} />
            </Typography>
          </Box>
        </Container>
        <Games />
        <CardComponent />
        <Box sx={{width:'95%',
                  height:'55px',
                  borderRadius: '10px',
                  backgroundColor: '#dfe955',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  marginTop:'10px',
                  marginBottom:'62px',
                  display:'flex',
                  justifyContent:'center',
                  }}>
         
  <Typography variant='h5'sx={{marginTop:'10px'}}>Bonus:₹ 14507068702.00</Typography>
          
        </Box>
      </Container>
  )
}

export default Home