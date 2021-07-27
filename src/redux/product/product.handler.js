import firebase from '../../firebase';
import * as action from './product.action';
const firestore = firebase.firestore();

const error = error => {
  return {
    type: action.PRODUCT_ERROR,
    error: error,
    loading: false
  };
};

export const save = product => {
  return dispatch => {
    dispatch({ type: action.PRODUCT_BEGIN });
    firestore.settings({
      timestampsInSnapshots: true
    });
    firestore
      .collection('product')
      .add({ ...product })
      .then(response => {
        dispatch({ type: action.PRODUCT_SAVED, product: response.id });
      })
      .catch(err => {
        dispatch(error(err.response.data));
      });
  };
};

export const query = () => {
  return dispatch => {
    dispatch({ type: action.PRODUCT_BEGIN });
    firestore
      .collection('product')
      .get()
      .then(querySnapshot => {
        const items = [];
        querySnapshot.forEach(doc => items.push({ id: doc.id, ...doc.data() }));
        dispatch({ type: action.QUERY_PRODUCTS, data: items });
      })
      .catch(err => {
        dispatch(error(err));
      });
  };
};
