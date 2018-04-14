function saveLocal(key, val) {
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem(key, val);
    // console.log('storing local', key, val)
  }
}

const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      console.log(action.data);
      return {
        ...state,
        data: action.data
      }
    case 'TOGGLE_LANG':
      const lang = state.lang === 'en'
        ? 'sk'
        : 'en'
      saveLocal('lang', lang)
      return {
        ...state,
        lang: lang
      }
    case 'TOGGLE_ORDER':
      const isAsc = !state.isAsc;
      saveLocal('isAsc', isAsc.toString())
      return {
        ...state,
        isAsc: isAsc
      }
    default:
      return state
  }
}

export const reducerLanguage = (state = {}, action) => {
  return {lang: state.lang}
}

export default reducers;
