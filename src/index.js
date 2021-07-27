import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.scss';
import authReducer from './redux/auth/auth.reducer';
import customerReducer from './redux/customer/customer.reducer';
import productReducer from './redux/product/product.reducer';
import showcaseReducer from './redux/showcase/showcase.reducer';
import reportWebVitals from './reportWebVitals';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : null) || compose;

const appReducer = combineReducers({
  showcase: showcaseReducer,
  product: productReducer,
  auth: authReducer,
  customer: customerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const browserHistory = createBrowserHistory();

const app = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
