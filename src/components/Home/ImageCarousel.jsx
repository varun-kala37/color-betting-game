import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia ,Box} from '@mui/material';
import carosel1 from '../../asset/image/caosel1.png'
import carosel2 from '../../asset/image/carosel2.png'
import carosel3 from '../../asset/image/carosel3.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images=[
    carosel1,
    carosel2,
    carosel3

  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ], 
       // Set autoplay speed in milliseconds (2 seconds in this example)
  };

  return (
    <Box sx={{margin:'10px',
    padding:'15px'
   
    }}>
    <Slider {...settings} >
      {images.map((imageUrl, index) => (
        <Card key={index} >
          <CardMedia
            component="img"
            alt={`Slide ${index + 1}`}
            height="140"
            image={imageUrl}
          />         
        </Card>
      ))}
    </Slider>
    </Box>
  );
};

export default ImageCarousel;