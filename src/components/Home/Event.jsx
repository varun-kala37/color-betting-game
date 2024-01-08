import React from 'react'
import event1 from '../../asset/image/event1.png';
import event2 from '../../asset/image/event2.png';
import event3 from '../../asset/image/event3.png';
import event4 from '../../asset/image/event4.png';
import event5 from '../../asset/image/event5.png';
import event6 from '../../asset/image/event6.png';
import { Container,Typography,Card ,CardContent,CardMedia,CardActionArea} from '@mui/material';
function Event() {
    const cardClickFunction=(description)=>{
        console.log(description+"clicked");
      }
    const cardData = [
        {
          image: event1,
          alt: 'event1',
          description: 'Daily Check-in-Bonus',
          category: 'WinGo'
    
        },
        {
            image: event2,
            alt: 'event2',
            description: 'New Year Eve First Deposit Bonus',
            category: 'WinGo'
        },
        {
            image: event3,
            alt: 'event3',
            description: '1 Minute Lottery Game',
            category: 'WinGo'
        },
        {
            image: event4,
            alt: 'event4',
            description: 'Aviator Lucky Bonus',
            category: 'WinGo'
        },
        {
            image: event5,
            alt: 'event5',
            description: 'Daily Check-in-Bonus',
            category: 'WinGo'
        },
        {
            image: event6,
            alt: 'event6',
            description: 'Unlimited Daily Cash Rebate',
            category: 'WinGo'
        },
    
      ];
  return (
    <Container sx={{
        width: '100%',
        marginTop:'55px',
        marginBottom:'65px'
      }}>
       {cardData.map((card, index) => (
         
        <Card sx={{
          width:'100%',
          height:'150px',
          marginTop:1,
          backgroundColor: '#696967'
        }}
        onClick={()=>{cardClickFunction(card.description)}}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="130px"
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
      ))}
         
      </Container>
  )
}

export default Event