import React, { useState } from 'react';
import { ButtonGroup, Button, Grid, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PreSaleRule from './PreSalesRule';
import BettingHistory from './BalanceHistory/BettingHistory';
import axios  from 'axios';
const ModalComponent = ({ open, onClose, sendDataToParent, modalTitle }) => {
    const [modalValue, setModalValue] = useState('');
    const [isChecked, setChecked] = useState(true);
    const [bet, setBet] = useState(0);
    const [betTimes, setbetTimes] = useState(1);
    const [selectedButton, setSelectedButton] = useState(null);
    const [SelectedButtonTimes, setSelectedButtonTimes] = useState(null);
    const Amount = bet * betTimes;



    const handleInputChange = (e) => {
        setModalValue(e.target.value);
    };

    const handleSendData = () => {

        isChecked ? sendDataToParent(modalValue) : alert("Please click I Agree For Pre Sale Rule");

        const postDataAsync = async () => {
            try {
                // Make an Axios POST request
                const userid=localStorage.getItem("userid");
                const gameid=localStorage.getItem("Gameid")
                const data = {
                    userId: userid,
                    gameId:gameid,
                    betAmount: Amount

                }
                
                  if (modalTitle == 0 || modalTitle == 1 || modalTitle == 2 || modalTitle == 3 || modalTitle == 4 || modalTitle == 5 ||
                    modalTitle == 6 || modalTitle == 7 || modalTitle == 8 || modalTitle == 9 )
                    {
                        data.number=modalTitle;
                    }
                    else if (modalTitle == "Green" || modalTitle == "Violet" || modalTitle == "Yellow" || modalTitle == "Red"|| modalTitle == "Orange" )
                        {
                            data.color=modalTitle;
                        }
                    else if(modalTitle == "Big" || modalTitle == "Small" )
                        {
                            data.size=modalTitle;
                        }
    
                   console.log(data)

                    const token = localStorage.getItem("accessToken");
                const headers = {

                    Authorization: `Bearer ${token}`,
                };
                const response = await axios.post('http://localhost:5000/bet/place-bet', data, { headers });
                // Update the state with the response data
                console.log(response.data);
            } catch (error) {
                console.error('Error making POST request:', error);
                console.log('Error details:', error.response);
            }
        };
        postDataAsync();

        onClose();
    };
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    const increment = () => {
        setbetTimes(betTimes + 1);
    };

    const decrement = () => {
        if (betTimes > 0) {
            setbetTimes(betTimes - 1);
        }
    }
    const handleSetButtonClick = (id) => {
        setBet(id);
        setSelectedButton(id);
    }
    const handlesetbetTimesClicked = (id) => {
        setbetTimes(id);
        setSelectedButtonTimes(id);
    }


    return (
        <div
            style={{
                display: open ? 'block' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: '1'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '85%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#2b384d',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <Grid container sx={{ mt: 1 }}>
                    <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'left' }}>
                        <Typography variant='h6'>Balance 0 <Button sx={{ backgroundColor: '#396d79', color: '#c3cf1a' }} >Recharge</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'right' }}>
                        <BettingHistory />
                    </Grid>
                </Grid>
                <hr />
                <Box>
                    <Typography variant='h6'>Select:{modalTitle}</Typography>
                    <Button onClick={onClose} style={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        backgroundColor: 'red'
                    }}
                        sx={{
                            height: '25px',
                            width: '20px'
                        }}
                    ><CloseIcon /></Button>
                </Box>

                <Grid container spacing={1} style={{ flex: 'shrink' }} sx={{ mb: 1 }}>
                    <Grid item xs={3} md={3}>
                        <Typography variant='h7'>Money</Typography>
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <ButtonGroup variant="outlined" aria-label="outlined button group" >
                            <Button onClick={() => handleSetButtonClick(1)}
                                style={{ backgroundColor: selectedButton === 1 ? 'yellow' : 'lightblue' }} >1</Button>
                            <Button onClick={() => handleSetButtonClick(10)}
                                style={{ backgroundColor: selectedButton === 10 ? 'yellow' : 'lightblue' }}>10</Button>
                            <Button onClick={() => handleSetButtonClick(100)}
                                style={{ backgroundColor: selectedButton === 100 ? 'yellow' : 'lightblue' }}>100</Button>
                            <Button onClick={() => handleSetButtonClick(1000)}
                                style={{ backgroundColor: selectedButton === 1000 ? 'yellow' : 'lightblue' }}>1000</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={{ flex: 'shrink' }} >
                    <Grid item xs={3} sm={3} md={3}>
                        <Typography variant='h7'>Multiply</Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9}>
                        <Button onClick={increment} style={{ backgroundColor: 'lightblue' }} sx={{
                            height: '25px',
                            width: '20px'
                        }}>+ </Button>
                        <Typography variant='h8' sx={{ display: 'inline', ml: 1, mr: 1 }}>{betTimes}</Typography>
                        <Button onClick={decrement} style={{ backgroundColor: 'lightblue' }} sx={{
                            height: '25px',
                            width: '20px'
                        }}>-</Button>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'right' }}>
                        <ButtonGroup variant="outlined" aria-label="outlined button group" >
                            <Button onClick={() => handlesetbetTimesClicked(1)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 1 ? 'yellow' : 'lightblue' }}>X1</Button>
                            <Button onClick={() => handlesetbetTimesClicked(5)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 5 ? 'yellow' : 'lightblue' }}>X5</Button>
                            <Button onClick={() => handlesetbetTimesClicked(10)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 10 ? 'yellow' : 'lightblue' }}>X10</Button>
                            <Button onClick={() => handlesetbetTimesClicked(20)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 20 ? 'yellow' : 'lightblue' }}>X20</Button>
                            <Button onClick={() => handlesetbetTimesClicked(50)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 50 ? 'yellow' : 'lightblue' }}>X50</Button>
                            <Button onClick={() => handlesetbetTimesClicked(100)} sx={{
                                height: '25px',
                                width: '20px'
                            }}
                                style={{ backgroundColor: SelectedButtonTimes === 100 ? 'yellow' : 'lightblue' }}>X100</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '10px' }}>
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        I Agree
                    </label>
                </div>
                <PreSaleRule />
                <Button onClick={handleSendData} variant="outlined" style={{ backgroundColor: '#396d79', color: '#c3cf1a' }}>Bet</Button>
                <h5>Total Betting: 0 Total Bet:{Amount}</h5>

            </div>
        </div >
    );
};

export default ModalComponent;