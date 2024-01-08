import React,{useState,useEffect} from 'react'
import { Grid, Link, Box, Button, Container } from '@mui/material';
import CountdownTimer from './components/CountdownTimer';
function Counter() {

const [durationTimer,setDurationTimer]=useState(1);
const [timerComplete, setTimerComplete] = useState(false);

const resultMinute=(minute)=>{
console.log("minute:"+ minute)
setDurationTimer(minute);
}

useEffect(() => {  
    const timerId = setTimeout(() => {
        // Timer completion logic
        setTimerComplete(true);
      }, durationTimer * 60000);
  
      // Clean up the timer when the component unmounts or when durationTimer changes
      return () => clearTimeout(timerId);
  }, [durationTimer]);

  useEffect(() => {
    if (timerComplete) {
        // Display the modal
        // Your modal display logic here
        console.log('Display modal');
  
        // Set a timeout to hide the modal after 3 seconds
        const modalTimeout = setTimeout(() => {
          // Your modal hide logic here
          console.log('Hide modal after 3 seconds');
          setTimerComplete(false);
        }, 3000);
  
        // Clean up the modal timeout when the component unmounts or when timerComplete changes
        return () => clearTimeout(modalTimeout);
    }
  }, [timerComplete]);

    return (
        <>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                margin: '100px 0px 0px 0px'
            }}>
                <Grid container
                    justifyContent="center"
                    alignItems="center" spacing={2}  >

                    <Grid item xs={3} sm={3} md={3} lg={3} textAlign={'center'}>
                        <Button sx={{ fontSize: 10 }} onClick={()=>{resultMinute(1)}}>1-Minute</Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} textAlign={'center'}>
                        <Button sx={{ fontSize: 10  }} onClick={()=>{resultMinute(3)}}>3-Minute</Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} textAlign={'center'}>
                        <Button sx={{ fontSize: 10 }} onClick={()=>{resultMinute(5)}}>5-Minute</Button>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} textAlign={'center'}>
                        <Button sx={{ fontSize: 9  }} onClick={()=>{resultMinute(10)}}>10-Minute</Button>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} lg={3} textAlign={'center'}>
                        <CountdownTimer duration={durationTimer} />
                    </Grid>
                    
                </Grid>
                
            </Container>
        </>
    )
}

export default Counter