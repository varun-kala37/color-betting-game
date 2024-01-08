import React ,{useState}from 'react'
import { Card, CardContent, Typography, CardMedia, CardActionArea, Grid, Box ,Button,ButtonGroup} from '@mui/material';
import Lottery from '../../asset/image/lottery.png';
import {  useNavigate } from "react-router-dom";


function CardComponent() {
  const navigate = useNavigate();
  const cardData = [
    {
      image: Lottery,
      alt: '1 Minute',
      description: '1 Minute',
      category: 'WinGo'

    },
    {
      image: Lottery,
      alt: '3 Minute',
      description: '3 minute',
      category: 'WinGo'
    },
    {
      image: Lottery,
      alt: '5 Minute',
      description: '5 minute',
      category: 'WinGo'
    },
    {
      image: Lottery,
      alt: '10 Minute',
      description: '10 Minute',
      category: 'WinGo'
    },
    {
      image: Lottery,
      alt: '10 Minute',
      description: 'TrxHash 1 minute',
      category: 'TrxHash'
    },
    {
      image: Lottery,
      alt: '10 Minute',
      description: 'TrxHash 3 minute',
      category: 'TrxHash'
    },
    {
      image: Lottery,
      alt: '10 Minute',
      description: 'TrxHash 5 minute',
      category: 'TrxHash'
    }

  ];
  const cardClickFunction=(description)=>{
    if(description==='1 Minute'){
      navigate('/minute1')
    }
  
  }
  
    const [selectedFilter, setSelectedFilter] = useState('All');
  
    const handleFilterClick = (filter) => {
      setSelectedFilter(filter);
    };
  
    const filteredCards = selectedFilter === 'All' ? cardData : cardData.filter(card => card.category === selectedFilter);

  return (
    <>
    <Box>
    <ButtonGroup sx={{marginTop:1,
                      width:'100%'
                      }}>
        <Button onClick={() => handleFilterClick('All')} variant={selectedFilter === 'All' ? 'contained' : 'outlined'}>
          All
        </Button>
        <Button onClick={() => handleFilterClick('WinGo')} variant={selectedFilter === 'WinGo' ? 'contained' : 'outlined'}>
          Win Go
        </Button>
        <Button onClick={() => handleFilterClick('TrxHash')} variant={selectedFilter === 'TrxHash' ? 'contained' : 'outlined'}>
          Trx Hash
        </Button> 
        <Button onClick={() => handleFilterClick('5DLottery')} variant={selectedFilter === '5DLottery' ? 'contained' : 'outlined'}>
          5D Lottery
        </Button> 
        <Button onClick={() => handleFilterClick('K3Lottery')} variant={selectedFilter === 'K3Lottery' ? 'contained' : 'outlined'}>
           K3 Lottery
        </Button>
        {/* Add more buttons for additional categories */}
      </ButtonGroup>
    <Grid container sx={{
                         display: "flex",
                         justifyContent: "space-around",
                         alignItems: "center",
                         marginTop: 1,
                        
                         }}>

  
      {filteredCards.map((card, index) => (
         <Grid item xs={4} sm={4} md={4}>
        <Card sx={{
          maxWidth: 100,
          maxHeight: 110,
          marginTop:1,
          backgroundColor: '#696967'
        }}
        onClick={()=>{cardClickFunction(card.description)}}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="90"
              image={card.image}
              alt={card.alt}
            />
            <CardContent sx={{ padding: '6px' }}>
              <Typography gutterBottom variant="h10" sx={{
                marginLeft: '24px',
                marginBottom: 1
              }}>
                {card.description}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
  </Grid>
  </Box>
    </>
  )
}

export default CardComponent