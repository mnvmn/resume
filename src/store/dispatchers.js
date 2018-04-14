export const dispatcherToggles = dispatch => {
  return {
    changeOrder: () => dispatch({type: 'TOGGLE_ORDER'}),
    changeLang: () => dispatch({type: 'TOGGLE_LANG'})
  }
}

export const dispatcherData = dispatch => {
  return {
    dataReceived: (data) => dispatch({type: 'DATA_RECEIVED', data})
  }
}
