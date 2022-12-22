import React, { ReactElement } from 'react';

import { Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import baseImg from 'assets/svg/photo-cover.svg';

import './style/user.scss';

type UserType = {
  name: string;
  email: string;
  phone: string;
  photo: string;
  position: string;
};
export const User = ({ name, email, phone, photo, position }: UserType): ReactElement => {
  return (
    <Grid display="flex" justifyContent="center" xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: '344px', width: '100%' }} className="card-container">
        <CardMedia
          component="img"
          height="70"
          width="70"
          image={photo || baseImg}
          alt="green iguana"
        />
        <CardContent>
          <Tooltip className="tooltip" title={name}>
            <Typography align="center" pt={2.5} noWrap component="div">
              {name}
            </Typography>
          </Tooltip>
          <Tooltip className="tooltip" title={position}>
            <Typography align="center" pt={2.5} noWrap component="div">
              {position}
            </Typography>
          </Tooltip>
          <Tooltip className="tooltip" title={email}>
            <Typography align="center" noWrap component="div">
              {email}
            </Typography>
          </Tooltip>

          <Typography align="center" noWrap component="div">
            {phone}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
