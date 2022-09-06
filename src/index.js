import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Los estilos propios, deben ir debajo del bootstrap para que no los pise.
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRoutingOne from './AppRoutingOne';
// import AppRoutingFinal from './AppRoutingFinal';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Function of App Store
import { createAppStore } from './store/config/storeConfig';

// We create the App Store
let appStore = createAppStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne /> */}
     {/* <AppRoutingFinal /> */}
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
