import * as dateService from 'library/date-service';
import firebase from '../../firebase';
import * as events from './auth.events';

const handleError = error => {
  return {
    type: events.AUTH_ERROR,
    error: error,
    loading: false
  };
};

export const authenthication = (email, password) => {
  return dispatch => {
    dispatch({ type: events.AUTH_BEGIN });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch({ type: events.AUTHENTHICATED, token: user });
      })
      .catch(error => {
        handleError(error);
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: events.LOGGED_OUT });
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  };
};

export const isAlreadyLogged = () => {
  return dispatch => {
    dispatch({ type: events.AUTH_BEGIN });
    const token = localStorage.getItem('token');
    const expirationDate = dateService.getDateTime(localStorage.getItem('expirationDate'));
    if (token !== null && expirationDate.isValid() && expirationDate.isAfter(dateService.getTodayNow())) {
      dispatch({ type: events.AUTHENTHICATED, token: token });
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationDate');
      dispatch(handleError({ message: 'Authentication required' }));
    }
  };
};
