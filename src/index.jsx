// Default export from a module
import React from 'react';
// Individual method exports from a module
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// CSS from a module
import 'bootstrap/dist/css/bootstrap.css';
// CSS from a local file
import './css/musiclist.scss';

// Default export from local file
import Store from './store';

import TemplateContainer from './components/TemplateContainer';

// props are passed down

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

// initilize component
renderApp(TemplateContainer);

// module provided from webpack when bundling
//
if (module && module.hot) {
  module.hot.accept('./components/TemplateContainer', () => {
    const NextApp = require('./components/TemplateContainer').default; // eslint-disable-line
    renderApp(NextApp); // reinitilize to show changes without full page refresh
  });
}
