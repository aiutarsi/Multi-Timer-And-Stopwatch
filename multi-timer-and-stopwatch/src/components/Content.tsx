import React, { useState, useEffect, createContext } from 'react';
import Timer from './Timer';
import Stopwatch from './Stopwatch';
import AddStopwatch from './AddStopwatch';
import usePersisit from './Persisit';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export const dataStopwatchContext = createContext(undefined);
export const keyStopwatchContext = createContext(undefined);

function Content() {
  const [keyStopwatch, setKeyStopwatch] = useState<number>(0);
  const [dataStopwatch] = useState<Object>({0:<Stopwatch/>});

  const val = {
    keyStopwatch,
    dataStopwatch,
  };

  // const addStopwatch = (val: JSX.Element) => {
  //   dataStopwatch.push((<Stopwatch/>));
  //   setKeyStopwatch(keyStopwatch+1);
  // }

  // useEffect( () => {

  // })

  // const timer = (
  //   <Grid xs={10}>
  //     <Timer/>
  //   </Grid>
  // )
  // const stopwatch = (
  //   <Grid xs={10}>
  //     <Stopwatch/>
  //   </Grid>
  // )

  // setData(timer);
  // setData(stopwatch);

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justifyItems="center" flexDirection="column">
        {
          () => {
            for( const[val] of Object.values(dataStopwatch)) {
              
            }
          }
        }
        {dataStopwatch.map( (value) => (
          <Grid xs={10}>
            {value}
          </Grid>
        ))}
        <Grid xs={10}>
          <AddStopwatch value={val}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Content;