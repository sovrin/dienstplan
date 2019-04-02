import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';

import './styles/style.scss';

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
