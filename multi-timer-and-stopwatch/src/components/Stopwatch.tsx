import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStopwatch } from 'react-timer-hook';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import TimerIcon from '@mui/icons-material/Timer';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Stopwatch(): JSX.Element {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false});

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={1} alignSelf="center">
              <TimerIcon />
            </Grid>
            <Grid xs={2} alignSelf="center">
              <Typography sx={{ fontSize: 20 }} color="text.secondary" align="left">
                Stopwatch
              </Typography>
            </Grid>
            <Grid xs={1} alignSelf="center">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            </Grid>
            <Grid xs={8}>
              <Box
                component="span"
                // sx={{
                //   '& > :not(style)': { m: 1, width: '40ch' },
                // }}
                //noValidate
                //autoComplete="off"
              >
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}/>
              </Box>
            </Grid>
            <Grid xs={12}></Grid>
            <Grid xs={2} alignSelf="center">
              <Button variant="contained" onClick={start}>Start</Button>
            </Grid>
            <Grid xs={2} alignSelf="center">
              <Button variant="contained" onClick={pause}>Pause</Button>
            </Grid>
            <Grid xs={2} alignSelf="center">
              <Button variant="contained" onClick={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds() + 0);
                reset(time, false)}}>Reset</Button>
            </Grid>
            <Grid xs={6} alignSelf="center">
              <Typography sx={{ fontSize: 40 }} color="text.secondary">
                {days}:{hours}:{minutes}:{seconds}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Stopwatch;