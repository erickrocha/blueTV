/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as handler from '../../redux/showcase/showcase.handler';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row'
  },
  showcase: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}));

const Home = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const showcase = useSelector(state => state.showcase.showcase);

  useEffect(() => {
    dispatch(handler.query());
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.showcase}></div>
    </div>
  );
};

export default Home;
