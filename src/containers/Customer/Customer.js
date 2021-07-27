import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import CPFTextField from 'components/CPFTextField';
import PhoneTextField from 'components/PhoneTextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as handler from 'redux/customer/index';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Customer = props => {
  const classes = useStyles();

  const user = useSelector(state => state.auth.user);
  const userId = useSelector(state => state.user.userId);

  const [formState, setFormState] = useState({
    isValid: false,
    values: user || {},
    touched: {},
    errors: {}
  });

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

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const userData = {
      uid: user.uid,
      ...formState.values
    };
    dispatch(handler.addUser(userData));
  };

  if (userId) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              U
            </Avatar>
          }
          title={
            <Typography gutterBottom variant="h6">
              Dados pessoais
            </Typography>
          }
        />
        <CardContent>
          <form name="account" onSubmit={submit}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="dense"
                  name="displayName"
                  value={formState.values?.displayName || ''}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  fullWidth
                  label="Social Security"
                  margin="dense"
                  name="socialSecurity"
                  InputProps={{
                    inputComponent: CPFTextField
                  }}
                  value={formState.values?.socialSecurity || ''}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  fullWidth
                  label="Email"
                  margin="dense"
                  name="email"
                  disabled
                  value={formState.values?.email || ''}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  fullWidth
                  label="Phone"
                  margin="dense"
                  name="phoneNumber"
                  InputProps={{
                    inputComponent: PhoneTextField
                  }}
                  value={formState.values?.phoneNumber || ''}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions className={classes.footer}>
          <Button color="primary" variant="contained" size="large" type="submit" disabled={props.disabled}>
            Save
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Customer;
