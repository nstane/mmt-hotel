import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HotelInfo from '../apimodels/HotelInfo';

import {inrCurrencyFormater } from '../stores/HotelStore'


interface HotelCardProps { 
    hotelInfo: HotelInfo
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:20,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 'auto',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export const HotelCard: React.FC<HotelCardProps> = (props) => {

    const {name, image, price, roomsAvailable, starRating} = props.hotelInfo;

    const classes: any = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image} />
                </ButtonBase>
            </Grid>
            <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {roomsAvailable} rooms availables
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {starRating} Stars
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        {inrCurrencyFormater.format(price)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
}