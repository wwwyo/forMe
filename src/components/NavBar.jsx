import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  
});


const NavBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      {props.keys.map((value, index) => {
        return(
          <Tab label={value} onClick={() => props.onClick(value)} key={index.toString()}/>
        )
      })};
      </Tabs>
    </Paper>
  );
}

export default NavBar