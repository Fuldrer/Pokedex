import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing(1),
    },
  }));
  
  export default function Inputs() {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Input
          placeholder = "Height"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="Weight"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="Gender"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Input
          placeholder="Catch Rate"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </div>
    );
  }