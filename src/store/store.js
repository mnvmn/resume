import { createStore } from 'redux';

import reducers from './reducers';

function loadLocal() {
  const hasLocalStorage = typeof Storage !== 'undefined';

  return {
    navbarOpen: hasLocalStorage && localStorage.getItem('navbarOpen') === 'true',
    lang: hasLocalStorage ? localStorage.getItem('lang') : null,
    isAsc: hasLocalStorage ? localStorage.getItem('isAsc') === 'true' : false,
  };
}

const settings = loadLocal();
const defaultState = {
  data: {
    info: [],
    education: [],
    work: [],
  },
  isLoading: false,
  navbarOpen: settings.isAsc !== null ? settings.navbarOpen : false,
  isAsc: settings.isAsc !== null ? settings.isAsc : true,
  lang: settings.lang !== null ? settings.lang : 'en',
};

export default createStore(reducers, defaultState);
