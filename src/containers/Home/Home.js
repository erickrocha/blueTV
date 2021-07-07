/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
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
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  showItem: {
    width: '23%'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handler.get());
  }, []);

  const products = useSelector(state => state.showcase.products);

  return (
    <div className={classes.root}>
      <div className={classes.showcase}>
        {products.map(product => (
          <Card key={product.id} className={classes.showItem}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {product?.name?.substring(0, 1)}
                </Avatar>
              }
              title={product.name}
              subheader={product.category}
            />
            <CardMedia className={classes.media} image="/public/images/logo192.png" title="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
