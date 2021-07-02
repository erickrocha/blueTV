/* eslint-disable react-hooks/exhaustive-deps */
import { Fab, Grid, makeStyles, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { updateObject } from 'library/utility';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as handler from 'redux/product/index';
import { BreadCrumb, LinkButton } from '../../components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  searchContainer: {}
}));

const ProductList = props => {
  const { history } = props;
  const classes = useStyles();

  const [params, setParams] = useState({ name: '', category: '' });

  const edit = id => {
    history.push(`/product/edit/${id}`);
  };

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(handler.query());
  }, []);

  const data = useSelector(state => state.product.data);

  return (
    <div className={classes.root}>
      <BreadCrumb label="Produtos" tree={[{ href: '/', label: 'Home' }]} />
      <LinkButton color="primary" variant="outlined" to="/product/new">
        New
      </LinkButton>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            fullWidth
            label="Nome"
            value={params.name}
            onChange={e => setParams(updateObject(params, { name: e.target.value }))}
            margin="dense"
            name="name"
            variant="outlined"
          />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <TextField
            fullWidth
            label="Caregoria"
            value={params.category}
            onChange={e => setParams(updateObject(params, { category: e.target.value }))}
            margin="dense"
            name="category"
            variant="outlined"
          />
        </Grid>
        <Grid item md={1} xs={12} container direction="row" justify="flex-end" alignItems="center">
          <Fab color="primary" aria-label="add" onClick={() => alert('Todo')} size="medium">
            <Search />
          </Fab>
        </Grid>
      </Grid>
      <br />
      <br />
      <div>${JSON.stringify(data)}</div>
    </div>
  );
};

export default ProductList;
