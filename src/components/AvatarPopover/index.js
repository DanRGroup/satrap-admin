import React from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';

export default function AvatarPopover(props) {
  const { media } = props;
  const img = media ? media : '/assets/images/picture.png';

  return (
    <Card sx={{ width: 40, height: 40 }} {...props}>
      <CardActionArea>
        <CardMedia sx={{ pt: '100%' }} image={img} />
      </CardActionArea>
    </Card>
  );
}
