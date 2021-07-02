import React, { Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Spinner } from './components';
import Home from './containers/Home';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Main from './layouts/Main/Main';
const ProductList = React.lazy(() => import('./containers/Product/ProductList'));
const Product = React.lazy(() => import('./containers/Product/Product'));

const App = () => {
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
};

export default withRouter(App);
