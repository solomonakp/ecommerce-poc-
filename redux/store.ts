import { createStore, applyMiddleware, AnyAction } from 'redux';
import { HYDRATE, createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

// imports index.js of reducers
import rootReducer from './reducers';
import { RootState } from './reducers/index';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = rootReducer;
const reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

// create a makeStore function
const initStore: MakeStore<RootState> = (context: Context) => {
  // creating store and binding middlewares
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(initStore, { debug: true });
