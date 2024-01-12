import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Groupedbuttons from '../components/Groupedbuttons'
import Tabledata from '../components/Tabledata'
import {  Container, Button, Grid } from '@mui/material';
import TableData2 from '../components/TableData2';
import Header from '../Header';
import Counter from '../Counter';
import BalanceContainer from '../components/BalanceContainer';


function Minute10  () {
  
const [time,setTime]=useState(10);
  const [showDynamicComponent, setShowDynamicComponent] = useState(true);
  const handleClick = () => {
    setShowDynamicComponent(true);
    setShowDynamicComponent2(false);
  };

  const [showDynamicComponent2, setShowDynamicComponent2] = useState(false);
  const handleClick2 = () => {
    setShowDynamicComponent(false);
    setShowDynamicComponent2(true);
  };

  const handleClick3 = () => {
    setShowDynamicComponent(false);
    setShowDynamicComponent2(false);
  };

  const sendTimer=(data)=>{
    setTime(data);
    console.log("from parent timer")
  }
  useEffect(() => {
    const data={duration:10}
    console.log("inside useeffect")
    /*
    const postDataAsync = async () => {
      try {
        // Make an Axios POST request for creating game
       
        const token= localStorage.getItem("accessToken");
        const headers = {
          
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.post('http://localhost:5000/games/create-game', data, {headers});
        // Update the state with the response data
        console.log(response.data);
        localStorage.setItem("Gameid", response.data.id);
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    };
    postDataAsync();
   
*/
  },[])
 
  useEffect(() => {
    const data={duration:time}
    console.log("inside useeffect")
    /*
    const postDataAsync = async () => {
      try {
        // Make an Axios POST request for creating game within 1 minute game
       
        const token= localStorage.getItem("accessToken");
        const headers = {
          
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.post('http://localhost:5000/games/create-game', data, {headers});
        // Update the state with the response data
        console.log(response.data);
        localStorage.setItem("Gameid", response.data.id);
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    };
    postDataAsync();
   */

  },[time])
  
  return (
    <>
     <Header /> 
    <Counter sendTimer={sendTimer}/>
      <Container maxWidth="lg" style={{ width: '100%' }} sx={{mt:3,mb:'120px'}}>
        <Groupedbuttons minute={1}/>
        <Grid container >
          <Grid item xs={4} sm={4} md={4} lg={4} size="small">
            <Button  onClick={handleClick} sx={{ 
                                                fontSize:'10px',
                                                fontWeight:'12px'}}>
              Game Record
            </Button>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}size="small" >
            <Button   size="small" onClick={handleClick2}  sx={{
                                                fontSize:'10px',
                                                fontWeight:'12px'}} >
              Chart Item
            </Button>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} size="small" >
            <Button   size="small" onClick={handleClick3}  sx={{ 
                                                fontSize:'10px',
                                                fontWeight:'12px'}}>
              My game record
            </Button>
          </Grid>
        </Grid>
        {showDynamicComponent && <Tabledata />}
        {showDynamicComponent2 && <TableData2 />}
       
      </Container>
      <BalanceContainer />
    </>

  )
}

export default Minute10