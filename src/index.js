import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section'

// webpack permite importar archivos como .css
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// actualiza la aplicacion en la pantalla
ReactDOM.render(<App/>, document.getElementById('App'));
ReactDOM.render(<Section/>, document.getElementById('Section'));



registerServiceWorker();