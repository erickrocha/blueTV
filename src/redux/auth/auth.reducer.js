import { updateObject } from 'library/utility';
import * as events from './auth.events';

const initialState = {
  loading: false,
  error: null,
  token: null
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case events.AUTH_BEGIN:
      return updateObject(state, { error: null, loading: true });
    case events.AUTHENTHICATED:
      return updateObject(state, { loading: false, token: payload.token });
    case events.AUTH_ERROR:
      return updateObject(state, { error: payload.error, loading: false });
    case events.LOGGED_OUT:
      return updateObject(state, { loading: false, token: null });
    default:
      return state;
  }
};

export default reducer;
