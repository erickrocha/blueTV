/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { SlideShow } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as handler from 'redux/showcase/index';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  showcase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  showItem: {
    [theme.breakpoints.up('sm')]: {
      width: '23%'
    },
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const images = [
  { path: '/images/image1.jpg', label: 'Imagem 1', id: 0 },
  { path: '/images/image2.jpg', label: 'Imagem 2', id: 1 },
  { path: '/images/image3.jpg', label: 'Imagem 3', id: 2 }
];

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handler.get());
  }, []);

  const products = useSelector(state => state.showcase.products);

  return (
    <div className={classes.root}>
      <SlideShow images={images} />
      <br />
      <div id="showcase" className={classes.showcase}>
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
            <CardActions>
              <Button size="small" color="primary">
                Adicionar
              </Button>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
