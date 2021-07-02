/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  MenuItem,
  TextField
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { BreadCrumb, FormFooter } from 'components';
import { findOne, updateObject } from 'library/utility';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import * as handler from 'redux/product/index';
import validate from 'validate.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  panel: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  imageBox: {
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      height: '95%'
    },
    width: 300,
    height: 300
  },
  row: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    }
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'Nome é obrigatório' },
    length: {
      maximum: 100
    }
  },
  description: {
    presence: { allowEmpty: false, message: 'Descrição é obrigatória' },
    length: {
      maximum: 500
    }
  },
  priceInCents: {
    presence: { allowEmpty: false, message: 'Preço é obrigatória' }
  },
  category: {
    presence: { allowEmpty: false, message: 'Categoria é obrigatória' }
  }
};

const Product = props => {
  const { history, match } = props;
  const classes = useStyles();

  const productId = match.params.id;
  const product = useSelector(state => findOne(state.product.data, productId));

  const categories = ['Mensal', 'Anual'];

  const dispatcher = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: product ? { ...product } : {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const goBack = () => {
    history.goBack();
  };

  const submit = event => {
    event.preventDefault();
    const errors = validate(formState.values, schema);
    if (!errors) {
      const productData = updateObject(product, {
        name: formState.values.name,
        priceInCents: formState.values.priceInCents * 100,
        category: findOne(categories, formState.values.category.id),
        description: formState.values.description
      });
      dispatcher(handler.save(productData));
    }
  };

  const hasError = field => (formState.touched[field] && formState.errors[field] ? true : false);

  const saved = useSelector(state => state.product.saved);

  const label = product && product.id ? `Alterar produto: ${product.name}` : 'Novo Produto';

  if (!saved) {
    return (
      <div className={classes.root}>
        <BreadCrumb
          label={label}
          tree={[
            { href: '/', label: 'Home' },
            { href: '/products', label: 'Produtos' }
          ]}
        />
        <form name="product" onSubmit={submit}>
          <Card className={classes.root} variant="outlined">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  P
                </Avatar>
              }
              title="Produto"
            />
            <Divider />
            <CardContent className={classes.content}>
              <div className={classes.panel}>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} className={classes.row}>
                    <TextField
                      error={hasError('name')}
                      fullWidth
                      helperText={hasError('name') ? formState.errors.name[0] : null}
                      label="Nome"
                      name="name"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.name || ''}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} sm={12} className={classes.row}>
                    <TextField
                      error={hasError('priceInCents')}
                      fullWidth
                      helperText={hasError('priceInCents') ? formState.errors.priceInCents[0] : null}
                      label="Preço"
                      name="priceInCents"
                      onChange={handleChange}
                      type="number"
                      value={formState.values.priceInCents || ''}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} sm={12} className={classes.row}>
                    <TextField
                      error={hasError('category')}
                      fullWidth
                      helperText={hasError('category') ? formState.errors.category[0] : null}
                      label="Categoria"
                      select
                      // eslint-disable-next-line react/jsx-sort-props
                      name="category"
                      onChange={handleChange}
                      value={formState.values.category || ''}
                      variant="outlined">
                      {categories.map(category => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={12} sm={12} className={classes.row}>
                    <TextField
                      error={hasError('description')}
                      fullWidth
                      multiline
                      rows={4}
                      rowsMax={4}
                      helperText={hasError('description') ? formState.errors.description[0] : null}
                      label="Descrição"
                      name="description"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.description || ''}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <Divider />
            <CardActions>
              <FormFooter disabled={!formState.isValid} onCancel={goBack} />
            </CardActions>
          </Card>
        </form>
      </div>
    );
  } else {
    return <Redirect to="/products" />;
  }
};

export default Product;
