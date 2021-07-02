import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    width: '100%'
  },
  button: {
    minWidth: 120
  },
  warning: {
    backgroundColor: '#ffd617'
  }
}));

const FormFooter = props => {
  const { onCancel } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={clsx(classes.button, classes.warning)}
        variant="contained"
        size="large"
        onClick={() => onCancel()}>
        Cancel
      </Button>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        size="large"
        type="submit"
        disabled={props.disabled}>
        Save
      </Button>
    </div>
  );
};

FormFooter.prototype = {
  onCancel: PropTypes.func.isRequired
};

export default FormFooter;
