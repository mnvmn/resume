import {
  applyMiddleware,
  createStore,
} from 'redux';

import {Reducers} from './reducers.js';

const settings = this.loadLocal();

const defaultState = {
  data: {
    info: [],
    education: [],
    work: []
  },
  isLoading: false,
  isAsc: settings.isAsc !== null
    ? settings.isAsc
    : true,
  lang: settings.lang !== null
    ? settings.lang
    : 'en'
};






export const store = createStore(reducers, defaultState);
