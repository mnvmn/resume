export const disp = (dispatch) => {
  return {
    toggleOrder: () => dispatch({type: 'TOGGLE_ORDER'}),
    toggleLang: () => dispatch({type: 'TOGGLE_LANG'}),
    toggleNavbar: () => dispatch({type: 'TOGGLE_NAVBAR'}),
    dataReceived: (data) => dispatch({type: 'DATA_RECEIVED', data})
  }
};

export default disp;
