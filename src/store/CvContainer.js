
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



  saveLocal(key, val) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem(key, val);
      // console.log('storing local', key, val)
    }
  }

  loadLocal() {
    const hasLocalStorage = typeof(Storage) !== 'undefined';

    return {
      lang: hasLocalStorage
        ? localStorage.getItem('lang')
        : null,
      isAsc: hasLocalStorage
        ? localStorage.getItem('isAsc') === 'true'
        : null
    }
  }
