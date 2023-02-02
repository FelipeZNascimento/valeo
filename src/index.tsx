import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.scss';
import Home from './Home';
import Base from './sections/Base';
import Confirmar from './sections/Confirmar';

// Redux imports
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Base>
          <Routes>
            <Route path={`/c/:code`} element={<Confirmar />} />
            <Route path={`/*`} element={<Home />} />
          </Routes>
        </Base>
      </Router>
    </Provider>
  </React.StrictMode>
);
