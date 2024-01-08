import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PreSalesRule() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} style={{ backgroundColor: '#396d79', color: '#c3cf1a' }}>
                Pre Sales Rule
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar 
                sx={{ position: 'relative',
                backgroundColor:'#3d3636',
                color:'#c3cf1a' }}
                >
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Pre Sales Rule
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            I Agree
                        </Button>
                    </Toolbar>
                </AppBar>
                <Typography gutterbottom sx={{ml: 1, mt: 2,mr:1}}>In order to protect the legitimate rights and interests of users participating in the presale and maintain the normal cperation order of the presale, the rules are formulated in accordonce with relevant agreements and rules of national laws and regulations.
                </Typography>
                <Typography gutterbottom sx={{ml: 1,mr:1,mt:1}}>
                    Chapter 1 Definition1.1 Presale definition : refers to a sales model in which a merchant provides a product or service plan, gathers consumer orders through presale product tools, and provides goods and or services to cons umers according to prior agreement1.
                </Typography>
                <Typography gutterbottom sx={{ml: 1,mr:1 ,mt:1}}>
                    2 The presale model is a "dep os it" model. "Dep os it" refers to a fixed amount of presale commodity price predelivered. "The deposit" con participate in small games and have the opportunity to win more deposits.
                    The depos it can be directy exchanged for commodities. The depos it is not redeemable.1.
                </Typography>
                <Typography gutterbottom sx={{ml: 1,mr:1 ,mt:1}}>
                    3 Presale products: refers to the product relecsed by merchants using presale product tools.Only the presale words are marked on the product title or product details page, ano the products thot do not use the pres ale product tools are not presale products.1.
                </Typography>
                <Typography gutterbottom sx={{ml: 1,mr:1 ,mt:1}}>
                    4 Presale system: Refers to the system product tools provided to support merchonts for presale model sales.1.5 Presale commodity price: refers to the selling price of presale commodity. The price of presale goods is composed of two parts: dep os it and final payment.
                </Typography>

            </Dialog>
        </React.Fragment>
    );
}
