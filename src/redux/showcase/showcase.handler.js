import firebase from '../../firebase';
import * as events from './showcase.events';
const firestore = firebase.firestore();

const handleError = error => {
  return {
    type: events.SHOWCASE_ERROR,
    error: error,
    loading: false
  };
};

export const get = () => {
  return dispatch => {
    dispatch({ type: events.SHOWCASE_BEGIN });
    firestore
      .collection('product')
      .get()
      .then(querySnapshot => {
        const products = [];
        querySnapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
        dispatch({ type: events.GET_SHOWCASE, products: products });
      })
      .catch(err => {
        dispatch(handleError(err));
      });
  };
};
