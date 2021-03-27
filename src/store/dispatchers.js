export const disp = (dispatch) => ({
  toggleOrder: () => dispatch({ type: 'TOGGLE_ORDER' }),
  toggleLang: () => dispatch({ type: 'TOGGLE_LANG' }),
  toggleNavbar: () => dispatch({ type: 'TOGGLE_NAVBAR' }),
  receivedCvData: (data) => dispatch({ type: 'RECEIVED_CV_DATA', data }),
  receivedRepoData: (data) => dispatch({ type: 'RECEIVED_REPO_DATA', data }),
});

export default disp;
