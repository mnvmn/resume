function saveLocal(key, val) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(key, val);
    // console.log('storing local', key, val)
  }
}

const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVED_REPO_DATA':
      return {
        ...state,
        repo: action.data,
      };
    case 'RECEIVED_CV_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'TOGGLE_NAVBAR': {
      const navbarOpen = !state.navbarOpen;
      saveLocal('navbarOpen', navbarOpen.toString());
      return {
        ...state,
        navbarOpen,
      };
    }
    case 'TOGGLE_LANG': {
      const lang = state.lang === 'en' ? 'sk' : 'en';
      saveLocal('lang', lang);
      return {
        ...state,
        lang,
      };
    }
    case 'TOGGLE_ORDER': {
      const isAsc = !state.isAsc;
      saveLocal('isAsc', isAsc.toString());
      return {
        ...state,
        isAsc,
      };
    }
    default:
      return state;
  }
};

export const reducerLanguage = (state = {}) => ({ lang: state.lang });

export default reducers;
