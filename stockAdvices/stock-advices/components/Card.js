import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './../styles/styles.css';

const Card = ({ text, imageUrl, description }) => {
  return (
    <MuiCard className={styles.card}>
      <CardMedia component="img" height="140" image={imageUrl} alt={text} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
