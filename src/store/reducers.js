import {combineReducers} from 'redux';

export const ReducerToggle = (state = {}, action) => {
    switch (action.type) {

      case CANGE_ORDER:
        const isAsc = !state.isAsc

        return

    }),
    function() {
      this.saveLocal('isAsc', this.state.isAsc.toString());
    });
  }

  changeLang() {
    this.setState(prevState => ({
      lang: prevState.lang === 'en'
        ? 'sk'
        : 'en'
    }), function() {
      this.saveLocal('lang', this.state.lang);
    });
  }

  return action.geod;
  case 'CLOSE_GEOD' : return {};
  default: return state;
}
};

export const reducers = combineReducers({geod});
