import React,{useState} from 'react'
import { Box, Container,Button,Avatar, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
function Profile() {
    const [value, setValue] = useState(0);
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
                   
                   <Avatar sx={{ bgcolor: 'orange',marginRight:'4px' }}>{userName[0]}</Avatar> 
                   <Typography sx={{color:'Black'}}>
                   Member: {userName}
                   </Typography>
           </Box>
            <Box sx={{ width: '100%',
                        }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{backgroundColor:'#1d2634'}}
                    
                >
                    <BottomNavigationAction label="My Profile" icon={<AccountBoxIcon />} />
                    <BottomNavigationAction label="Login Log" icon={<HistoryToggleOffIcon />} />
                    <BottomNavigationAction label="Betting History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Transaction Record" icon={<ReceiptLongIcon />} />
                </BottomNavigation>
            </Box>
            
           <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                width: '100%',
                height: '50px',
                backgroundColor: '#dfe955',
                borderRadius: '10px',
                marginBottom:'15px'

            }}>
                   <Button sx={{color:'Black'}}>Logout</Button>
           </Box>



        </Container>
    )
}

export default Profile
