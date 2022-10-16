import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconButton from '@mui/material/IconButton';
import TimerIcon from '@mui/icons-material/Timer';
import Stopwatch from './Stopwatch';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddStopwatch() {

  // const addStopwatch = (val: JSX.Element) => {
  //   props.data.push((<Stopwatch/>));
  // }

  return (
    <div>
      <Box sx={{ border: '1px dashed grey' }}>
        <Grid container spacing={2} alignItems="center" justifyItems="center">
          <Grid xs={3}>
            <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
            </IconButton>
          </Grid>
          <Grid xs={9}>
            <Typography sx={{ fontSize: 40 }} color="text.secondary">
              Stopwatch
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default AddStopwatch;