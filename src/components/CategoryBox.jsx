import React from 'react'
import { makeStyles, createStyles, createGenerateClassName } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Box, AddButton} from './index';

const useStyles = makeStyles(() => (
  createStyles({
    "container": {
      display: "flex",
      justifyContent: "center",
    },
    "grid": {
      padding: 10,
      height: 150,
    },
  })
));

const CategoryBox = (props) => {
  const classes = useStyles();

    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            {props.contents.map((value, index) => {
              return(
                <Grid item className={classes.grid} xs={6} sm={3} key={index.toString()}>
                  <Box list={value.list} text={value.text} key={index.toString()} getText={(text) => props.getText(text, index)}/>
                </Grid>
              )
            })}
            <Grid item className={classes.grid} xs={6} sm={3} >
              <AddButton onClick={(list) => props.onClick(list)}/>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
}
  

export default CategoryBox
