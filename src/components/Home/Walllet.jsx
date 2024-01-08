import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
function Walllet() {
    return (
        <Container sx={{
            width: '100%',
            marginTop: '55px'
        }}>
            <Container sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                width: '90%',
                height: '150px',
                backgroundColor: '#dfe955',
                borderRadius: '10px',
                marginBottom:'15px'

            }}>

                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography sx={{ color: '#3d3d3a' }}>Withdrawl Balance:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography sx={{ color: '#3d3d3a' }}>
                            <CurrencyRupeeIcon sx={{
                                fontSize: 17,
                                verticalAlign: 'middle'
                            }} /> 0.00
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography><AccountBalanceWalletIcon sx={{ verticalAlign: 'middle' }} /> Withdrawal</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography><SavingsIcon sx={{ verticalAlign: 'middle' }} /> Deposit</Typography>
                    </Grid>
                </Grid>                
            </Container>
            <hr/>
            <Button fullWidth sx={{color:'white'}} >Recharge Record</Button>
            <hr/>
            <Button fullWidth  sx={{color:'white'}}>Withdrawals Record</Button>
            <hr/>
        </Container>
    )
}

export default Walllet