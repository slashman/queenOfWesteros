import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App.component.js';

window.React = React;

render(
    <App />,
    document.getElementById('react-container')
);
