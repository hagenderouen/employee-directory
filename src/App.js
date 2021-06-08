import './App.css';
import '@fontsource/roboto';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from './components/Grid';
import userData from './userDataRes.json';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography><h2>Employee Directory</h2></Typography>
        </Toolbar>
      </AppBar>
      <Grid userData={userData} />
    </React.Fragment>
  );
}

export default App;
