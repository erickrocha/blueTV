import { updateObject } from 'library/utility';
import * as action from './product.action';

const initialState = {
  loading: false,
  error: null,
  data: [],
  page: {
    number: 1,
    size: 5,
    first: true,
    last: false,
    totalPages: 0,
    totalItems: 0
  },
  saved: false
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case action.PRODUCT_BEGIN:
      return updateObject(state, { error: null, loading: true });
    case action.QUERY_PRODUCTS:
      return updateObject(state, { data: payload.data });

    case action.PRODUCT_ERROR:
      return updateObject(state, { error: payload.error, loading: false });

    case action.PRODUCT_SAVED:
      return updateObject(state, { saved: true, product: payload.product });
    default:
      return state;
  }
};

export default reducer;
