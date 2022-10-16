import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
