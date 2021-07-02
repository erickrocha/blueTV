import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { withRouter } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  carousel: {
    height: '150px'
  },
  content: {
    height: '90%'
  }
}));

const Main = props => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <TopBar />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

export default withRouter(Main);
