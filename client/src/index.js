import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./components/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
   <Router>
      <App />
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
