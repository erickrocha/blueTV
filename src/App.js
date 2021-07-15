import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Spinner } from './components';
import Home from './containers/Home';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Main from './layouts/Main/Main';
import * as handler from 'redux/auth';
const ProductList = React.lazy(() => import('./containers/Product/ProductList'));
const Product = React.lazy(() => import('./containers/Product/Product'));
const SignIn = React.lazy(() => import('./containers/SignIn'));
const SignUp = React.lazy(() => import('./containers/SignUp'));

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.token != null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handler.isAlreadyLogged());
  }, []);

  if (isAuthenticated) {
    return (
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Main>
            <Switch>
              <Route component={Home} exact path="/home" />

              <Route component={ProductList} exact path="/products" />
              <Route component={Product} exact path="/product/new" />
              <Route component={Product} exact path="/product/edit/:id" />
              <Redirect to="/home" />
            </Switch>
          </Main>
        </ErrorBoundary>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Switch>
            <Route component={SignUp} exact path="/signUp" />
            <Route component={SignIn} exact path="/signIn" />
            <Redirect to="/signIn" />
          </Switch>
        </ErrorBoundary>
      </Suspense>
    );
  }
};

export default withRouter(App);
