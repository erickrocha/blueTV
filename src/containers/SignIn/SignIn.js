import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const SignIn = () => {
  const classes = useStyles();

  return <div className={classes.root}>Works!!</div>;
};

export default SignIn;
