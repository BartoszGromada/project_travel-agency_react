import {combineReducers, createStore} from 'redux';
import tripList from '../data/trips.json';

import globalReducer from './globalRedux';
import filtersReducer from './filtersRedux';
import orderReducer from './orderRedux';

const initialState = {
  trips: tripList,
  countries: {},
  regions: {},
  subregions: {},
  tags: {},
  filters: {
    searchPhrase: '',
    tags: [],
    regions: [],
    duration: {
      from: 1,
      to: 14,
    },
  },
  order: {
    trip: null,
    email: '',
    options: {},
    startDate: new Date().toString(),
  },
};

const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
