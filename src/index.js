import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store from './redux/store';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={true}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr}
      transitionIn="bounceIn"
      transitionOut="bounceOut"
      progressBar={false}
      closeOnToastrClick
    />
    <App />
  </Provider>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
