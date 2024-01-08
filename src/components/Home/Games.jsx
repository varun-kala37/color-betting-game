import React from 'react'
import Lottery from '../../asset/image/lottery.png';
import aviator from '../../asset/image/aviatar.png';
import slots from '../../asset/image/slots.png';
import Casino from '../../asset/image/casino.png'
import popular from '../../asset/image/popular.png'
import fishing from '../../asset/image/fishing.png'
import { Card, CardContent, Typography, CardMedia, CardActionArea, Grid} from '@mui/material';
function Games() {
    const handleCardClick = () => {
        console.log("clicked lottery")
      }
  return (
    <>
    <Grid sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 1,


      }}>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,
            
            backgroundColor: '#dfe955'
          }}
            onClick={handleCardClick} style={{ cursor: 'pointer' }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={Lottery}
                alt="lottery"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',
                  marginBottom: 1
                }}>
                  Lottery
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,
           
            backgroundColor: '#dfe955'
          }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={aviator}
                alt="aviator"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',

                }}>
                  Aviator
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,
            
            backgroundColor: '#dfe955'
          }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={slots}
                alt="slots"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',
                  marginBottom: 1
                }}>
                  Slots
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>




      <Grid sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 1,


      }}>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,

            backgroundColor: '#dfe955'
          }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={Casino}
                alt="Casino"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',
                  marginBottom: 1
                }}>
                  Casino
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,

            backgroundColor: '#dfe955'
          }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={popular}
                alt="popular"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',

                }}>
                  Popular
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{
            maxWidth: 100,
            maxHeight: 110,

            backgroundColor: '#dfe955'
          }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={fishing}
                alt="fishing"
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography gutterBottom variant="h10" sx={{
                  marginLeft: '24px',
                  marginBottom: 1
                }}>
                  Fishing
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Games