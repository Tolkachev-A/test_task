import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core';
import { Grid, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import baseImg from 'assets/svg/photo-cover.svg';

import './style/user.scss';

type UserType = {
  name: string;
  email: string;
  phone: string;
  photo: string;
  position: string;
};
const useStyles = makeStyles({
  root: { border: 'none', borderRadius: '10px', boxShadow: 'none' }, // a style rule
});

export const User = ({ name, email, phone, photo, position }: UserType): ReactElement => {
  const classes = useStyles();

  return (
    <Grid className="users-list" item xs={12} sm={6} md={4}>
      <Card classes={{ root: classes.root }} className="card-container">
        <CardMedia
          className="card-img"
          component="img"
          image={photo || baseImg}
          alt="green iguana"
        />
        <CardContent className="description">
          <Tooltip className="description__tooltip" title={name}>
            <Typography align="center" pt={2.5} noWrap component="div">
              {name}
            </Typography>
          </Tooltip>
          <Tooltip className="description__tooltip" title={position}>
            <Typography align="center" pt={2.5} noWrap component="div">
              {position}
            </Typography>
          </Tooltip>
          <Tooltip className="description__tooltip" title={email}>
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
