import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Explanation() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} style={{ color: '#c3cf1a' }}>
                Explanation
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' ,backgroundColor:'#3d3636',color:'#c3cf1a'}}>
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
                <Typography gutterbottom sx={{ ml: 1, mt: 2, mr: 1 }}> 1 minute 1 period, 55 seconds to order, 5 seconds waiting for the draw. 
                   It opens all day, the total number of purchases in a day is 1440 times.
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                   All the single bets will be have handling fee 2%. For example bet 100 Rs after deduct the fee the exact betting amount will be 98 Rs.
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                Odds:
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                1. Select Green: if the result shows 1,3,7,9 the pay out is  (98*2)=196 ;
                 If the result shows 5, the pay out is  (98*1.5) 147
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                2. Select Red: if the result shows 2,4,6,8 the pay out is  (98*2)=196 ; If the result shows 0, the pay out is  (98*1.5) 147
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                3. Select Violet: if the result shows 0 or 5, the pay out is  (98*4.5)=441
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                4. Select Number: if the result is the same as the number you selected, the pay out is  (98*9)=882
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                5. Select Big: if the result shows 5,6,7,8,9 the pay out is  (98*2)=196
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                6. Select Small: if the result shows 0,1,2,3,4 the pay out is  (98*2)=196
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                GAME RULES: 
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                - It is not allowed to make 2-sided bets in 1 game period (For example: choosing green and red or big and small in the same period) 
                </Typography>
                <Typography gutterbottom sx={{ ml: 1, mr: 1, mt: 1 }}>
                - To bet on numbers: the maximum total number that can be selected is 7 in 1 period (No more) 
                </Typography>
                


            </Dialog>
        </React.Fragment>
    );
}
