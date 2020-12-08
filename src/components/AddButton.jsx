import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
  })
))

const AddButton = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getText = () => {
    const text = document.getElementById("list-name").value
    return text
  }

  return(
    <>
    <Paper 
      className={classes.paper}
      onClick={handleClickOpen}
    >
      ➕
    </Paper>
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>list-name</DialogTitle>
      <DialogContent >
        <TextField
          autoFocus
          margin="dense"
          type="text"
          id="list-name"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={() => props.onClick(getText(handleClose()))} color="primary">
          追加
        </Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default AddButton