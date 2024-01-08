import React from 'react'
import { Container, Grid, Button, } from '@mui/material';
import Marquee from "react-fast-marquee";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Explanation from './components/Explanation';
import {   useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const buttonStyle = {
        color: '#c3cf1a',
    };

    const marqueeborder = {
        border: '2px solid #c3cf1a', /* Border color and width */
        padding: '10px',
        margin: '0px 0px 10px 15px'
    };
    const moveToHome=()=>{
        
        navigate("/homepage");
    }
    return (
        <>
            <Container maxWidth="lg" style={{ width: '100%' }} 
            sx={{position:'fixed',
            zIndex:1,
            bgcolor:'#3d3636',
            top:0,
            right:0,
            left:0}}>

                <Grid container spacing={2}  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Button style={buttonStyle} onClick={moveToHome}><ArrowBackIosIcon /></Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} justifyContent="center" container>
                        <Button style={buttonStyle}>Win go</Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} container justifyContent="flex-end">
                        <Explanation/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={marqueeborder} >
                        <Marquee >-- For your convinence to ensure the safety of your account and successful withdrawl process. Please fill the genuine mobile number registered to your bank account. Thank you !! </Marquee>
                    </Grid>
                </Grid>
                
            </Container>
            
        </>

    )
}
