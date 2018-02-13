import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Template from './components/Template';

// props are passed down

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={5678} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

// initilize component
renderApp(Template);

// module provided from webpack when bundling
//
if (module && module.hot) {
  module.hot.accept('./components/Template', () => {
    renderApp(Template); // reinitilize to show changes without full page refresh
  });
}
