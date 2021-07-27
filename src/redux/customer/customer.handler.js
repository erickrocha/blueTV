import firebase from '../../firebase';
import * as events from './customer.events';
const firestore = firebase.firestore();

const error = error => {
  return {
    type: events.CUSTOMER_ERROR,
    error: error,
    loading: false
  };
};

export const persist = customer => {
  return dispatch => {
    dispatch({ type: events.CUSTOMER_BEGIN });
    firestore.settings({
      timestampsInSnapshots: true
    });
    firestore
      .collection('customer')
      .add({ ...customer })
      .then(response => {
        dispatch({ type: events.CUSTOMER_SAVED, customerId: response.id });
      })
      .catch(err => {
        dispatch(error(err.response.data));
      });
  };
};
