import React from 'react'
import { Box, Container } from '@mui/material'
import { useState } from 'react';
import ModalComponent from './ModalComponent';

function Groupedbuttons(minute) {

    const [open, setOpen] = useState(false);
    const [receivedData, setReceivedData] = useState('');
    const [currentModalTitle, setCurrentModalTitle] = useState('');
    
    const handleOpen = (modalTitle) => {
        setOpen(true);
        setCurrentModalTitle(modalTitle);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReceiveData = (data) => {
        setReceivedData(data);
        console.log('Received data in parent:', data);
    };
    return (
        <>
            <Container maxWidth="lg" style={{ width: '90%', margin: 'auto',borderRadius:'10px',backgroundColor:'#3d3636' }} >
                <Box className='container-buttons' sx={{
                    height:'25px',
                    mb:3
                }}>
                    <button className='circular1' onClick={() => handleOpen('0')}>0</button>
                    <button className='circular2' onClick={() => handleOpen('1')}>1</button>
                    <button className='circular1' onClick={() => handleOpen('2')}>2</button>
                    <button className='circular2' onClick={() => handleOpen('3')}>3</button>
                    <button className='circular1' onClick={() => handleOpen('4')}>4</button>
                </Box>
                <Box className='container-buttons' sx={{
                    height:'25px',
                    mb:3
                }}>
                    <button className='circular1' onClick={() => handleOpen('5')}>5</button>
                    <button className='circular2' onClick={() => handleOpen('6')}>6</button>
                    <button className='circular1' onClick={() => handleOpen('7')}>7</button>
                    <button className='circular2' onClick={() => handleOpen('8')}>8</button>
                    <button className='circular1' onClick={() => handleOpen('9')}>9</button>
                </Box >
                <Box className='container-buttons' sx={{
                    height:'25px',
                    mb:3
                }}>
                    <button className='greenbutton' onClick={() => handleOpen('Green')}>Green</button>
                    <button className='Violetbutton' onClick={() => handleOpen('Violet')}>Violet</button>
                    <button className='Yellowbutton' onClick={() => handleOpen('Yellow')}>Yellow</button>                   
                </Box>
                <Box className='container-buttons' sx={{
                    height:'25px',
                    mb:3
                }}>
                    <button className='redbutton' onClick={() => handleOpen('Red')}>Red</button>                
                    <button0 className='Orangebutton' onClick={() => handleOpen('Orange')}>Orange</button0>
                </Box>
                <Box className='container-buttons' >
                    <button className='Bigbutton' onClick={() => handleOpen('Big')}>Big</button>
                    <button className='Smallbutton' onClick={() => handleOpen('Small')}>Small</button>
                </Box>
                <ModalComponent open={open}
                    onClose={handleClose}
                    sendDataToParent={handleReceiveData}
                    modalTitle={currentModalTitle} />
                    
            </Container>

        </>
    )
}

export default Groupedbuttons