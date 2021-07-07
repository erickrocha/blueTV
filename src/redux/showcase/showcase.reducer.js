import { updateObject } from '../../library/utility';
import * as events from './showcase.events';

const initialState = {
  loading: false,
  error: null,
  products: []
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case events.SHOWCASE_BEGIN:
      return updateObject(state, { error: null, loading: true });
    case events.SHOWCASE_ERROR:
      return updateObject(state, { error: payload.error, loading: false });
    case events.GET_SHOWCASE:
      return updateObject(state, { products: payload.products, loading: false });
    default:
      return state;
  }
};

export default reducer;
