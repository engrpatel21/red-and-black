import React from 'react';
import SideMenu from '../Components/SideMenu';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <SideMenu />
      <div className={classes.appMain} >here we go</div>
    </div>
  );
}

export default App;
