import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '2rem'
      
    },
  }));
function Save(props) {
    const classes = useStyles();
    const { home, id, name, description, change, isUpdate, save } = props;
    
    return (
        <div>
            <TextField
            className={classes.root}
            label="UserId"
            disabled={isUpdate}
            name="id"
            value={id}
            onChange={change}
            /> 
            <TextField
            className={classes.root}
            label="Username"
            name="name"
            value={name}
            onChange={change}
            /> 
            <TextField
            className={classes.root}
            label="User's Description"
            name="description"
            value={description}
            multiline
            rows={3}
            onChange={change}
            />
            <Typography className={classes.root}>
            <Button onClick={save} style={{marginRight: '1rem'}} variant="contained" color="primary">Save</Button>
            <Button onClick={home} variant="contained" color="secondary">Go To Home</Button>
            </Typography>
        </div>
    )
}

export default Save;
