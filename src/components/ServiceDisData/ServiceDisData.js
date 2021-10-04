import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ServiceDisData = (props) => {

    const {img , title , instructor ,institution , duration , price } = props.data

    return (
        <div>
            <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Subject : {title}
                    </Typography>
                    <Typography variant="h5" color="text.info">
            Instructor Name : {instructor}
                    </Typography>
          <Typography gutterBottom variant="h6" component="div">
             Course Duration : {duration}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Course Fee : {price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            College : {institution}
          </Typography>
          
          <Button sx={{my:'10px'}} variant="contained">Purchase Now</Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    );
};

export default ServiceDisData;