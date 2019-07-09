import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';

// Libs
import './lib';

// Styles
import './styles/index.css';

// Components
import App from './components/layout/App';
import registerServiceWorker from './registerServiceWorker';

// Config redux
import allReducers from './reducers';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(

  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();
