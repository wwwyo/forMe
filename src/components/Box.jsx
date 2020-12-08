import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(() => (
  createStyles({
    "paper": {
      width: "100%",
      height: "100%",
      padding: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto",
    },
    "textField": {
      width: "38vw",
      height: "70vh"
    },
  })  
));

const Box = (props) => {
  let [counter, setCount] = useState(props.text.length);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onKeyPressed = () => {
    let text = document.getElementById("text-name").value;
    setCount(counter =  text.length)
  }

  const getText = () => {
    const text = document.getElementById("text-name").value
    return text
  }


  return(
    <>
    <Paper 
      className={classes.paper}
      onClick={handleClickOpen}
    >
      {props.list}
    </Paper>      
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{props.list}</DialogTitle>
      <DialogContent>
        <TextField
          id="text-name"
          multiline={true}
          rows={20}
          defaultValue={props.text}
          variant="outlined"
          className={classes.textField}
          onKeyDown={onKeyPressed}
        />
      </DialogContent>
      <DialogActions>
      <DialogContent> 文字数:{counter}</DialogContent>
        <Button onClick={handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={() => props.getText(getText(handleClose()))} color="primary">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}

export default Box
