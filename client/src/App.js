import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './scss/main.scss';

import Main from './components/layouts/Main';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Main />
    </Fragment>
  </Provider>
);

export default App;
