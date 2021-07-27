import { updateObject } from 'library/utility';
import * as events from './customer.events';

const initialState = {
  loading: false,
  error: null,
  customerId: null
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case events.CUSTOMER_BEGIN:
      return updateObject(state, { error: null, loading: true });
    case events.CUSTOMER_SAVED:
      return updateObject(state, {
        loading: false,
        customerId: payload.customerId
      });
    case events.CUSTOMER_ERROR:
      return updateObject(state, { error: payload.error, loading: false });
    default:
      return state;
  }
};

export default reducer;
