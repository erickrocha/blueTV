import axios from '../../axios.config';
import * as events from './showcase.action';

const handleError = error => {
  return {
    type: events.SHOWCASE_ERROR,
    error: error,
    loading: false
  };
};

export const query = () => {
  return dispatch => {
    dispatch({ type: events.SHOWCASE_BEGIN });
    axios.get('/produtos.json');
    dispatch({ type: events.GET_SHOWCASE, showcase: {} });
  };
};
