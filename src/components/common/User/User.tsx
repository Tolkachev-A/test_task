import React, { ReactElement } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './style/user.scss';

type UserType = {
  name: string;
  email: string;
  phone: string;
  photo: string;
};
export const User = ({ name, email, phone, photo }: UserType | any): ReactElement => {
  console.log(name, email, phone, photo);

  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        height="70"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography align="center" pt={2.5} noWrap component="div">
          Salvador Stewart Flynn Thomas Salva Salva
        </Typography>
        <Typography align="center" pt={2.5} noWrap component="div">
          Leading specialist of the department of csacasc
        </Typography>
        <Typography align="center" noWrap component="div">
          JeromeKlarkaJeromeKlarka1923362362..ascc
        </Typography>
        <Typography align="center" noWrap component="div">
          +38 (098) 278 76 24
        </Typography>
      </CardContent>
    </Card>
  );
};
