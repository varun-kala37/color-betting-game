import React,{ useState, useEffect } from 'react'
import { Modal,Box, Typography } from '@mui/material';
const CountdownTimer = ({ duration }) => {
    const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  
    useEffect(() => {
      setTimeRemaining(duration * 60);
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      // Clear the interval when the component unmounts or when time hits zero
  
      return () => clearInterval(interval);
    }, [duration]);
  
    useEffect(() => {
      if (timeRemaining === 0) {
        // Handle timer completion, e.g., display a message
        console.log(`Countdown for ${duration} minute(s) is over!`);
      
     
      }
    }, [timeRemaining, duration]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
  
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        
       }}>
        <Typography variant='h9' sx={{width:'100%'}}>Time Remaining: {formatTime(timeRemaining)}</Typography>
        </Box>
    );
  };
  export default CountdownTimer;