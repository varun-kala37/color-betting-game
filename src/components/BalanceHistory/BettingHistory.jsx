import * as React from 'react';
import { Button, Dialog, AppBar, Toolbar, Typography, Slide, Grid,  Box } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HistoryIcon from '@mui/icons-material/History';
import Tabledata from '../Tabledata';
import Minute3History from './Minute3History';
import Minute5History from './Minute5History';
import Minute10History from './Minute10History';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BettingHistory() {
    const [open, setOpen] = React.useState(false);
    const [minute1,setMinute1]=React.useState(false);
    const [minute3,setMinute3]=React.useState(false);
    const [minute5,setMinute5]=React.useState(false);
    const [minute10,setMinute10]=React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const openhistory=(id) => {
        if(id==='1'){
            setMinute1(true);
            setMinute3(false);
            setMinute5(false);
            setMinute10(false);
        }
        else if(id==='3'){           
            setMinute3(true);
            setMinute1(false);
            setMinute5(false);
            setMinute10(false);       
        }
        else if(id==='5'){    
            setMinute5(true);
            setMinute1(false);
            setMinute3(false);
            setMinute10(false);          
        }      
        else if(id==='10'){        
            setMinute10(true);
            setMinute1(false);
            setMinute3(false);
            setMinute5(false);
        } 
    }
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} size='small' style={{ backgroundColor: '#c3cf1a', color: 'white' }}>
                History<HistoryIcon />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar 
                sx={{ position: 'relative' ,
                backgroundColor:'#3d3636',
                color:'#c3cf1a'}}
                >
                    <Toolbar>
                        <Grid container spacing={1}  >
                            <Grid item sm={4} xs={4} md={4} lg={4} xl={4} >
                                <Button autoFocus color="inherit" onClick={handleClose}>
                                    <ArrowBackIosIcon />
                                </Button>
                            </Grid>
                            <Grid item sm={4} xs={4} md={4} lg={4} xl={4} sx={{ textAlign:'center'}}>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Win Go
                                </Typography>
                            </Grid>
                            <Grid item sm={4} xs={4} md={4} lg={4} xl={4} sx={{ textAlign:'end'}}>
                                <Button autoFocus color="inherit" sx={{padding:'1'}}>Support
                                    <SupportAgentIcon />
                                </Button>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>
                <Box>
                    <Grid container spacing={1} sx={{ bgcolor: 'grey',color:'white', textAlign:'center' }}>
                        <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                            <Button autoFocus color="inherit" onClick={()=>{openhistory('1')}}>
                                1 Minute
                            </Button>
                        </Grid>
                        <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                            <Button autoFocus color="inherit" onClick={()=>{openhistory('3')}}>
                                3 Minute
                            </Button>
                        </Grid>
                        <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                            <Button autoFocus color="inherit" onClick={()=>{openhistory('5')}}>
                                5 Minute
                            </Button>
                        </Grid>
                        <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                            <Button autoFocus color="inherit" onClick={()=>{openhistory('10')}}>
                                10 Minute
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
               
                    {minute1 && <Tabledata/>}
                    {minute3 && <Minute3History/>}
                    {minute5 && <Minute5History/>}
                    {minute10 && <Minute10History/>}
           

            </Dialog>
        </React.Fragment>
    );
}
