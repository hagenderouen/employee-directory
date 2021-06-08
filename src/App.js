import '@fontsource/roboto';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from './components/Grid';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography>Employee Directory</Typography>
        </Toolbar>
      </AppBar>
      <Grid/>
    </React.Fragment>
  );
}

export default App;
