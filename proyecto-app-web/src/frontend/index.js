import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import AppRoutes from './routes/app-routes';
import './index.css';

const App = () => {
    React.useEffect(() => {
        const jssStyles = document.getElementById('jss-server-side');
        if(jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <AppRoutes />
    );
}

const history = createBrowserHistory();

ReactDOM.hydrate(
    <Router history={history}>
        <App />
    </Router>
, document.getElementById('app'));