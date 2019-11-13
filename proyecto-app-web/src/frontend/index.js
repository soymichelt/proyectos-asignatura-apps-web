import React from 'react';
import ReactDOM from 'react-dom';

import Perfil from './perfil/contenedores/perfil-container';

import './index.css';

const App = () => {

    React.useEffect(() => {
        const jssStyles = document.getElementById("app");
        if(jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Perfil />
    );

}

ReactDOM.hydrate(<App />, document.getElementById('app'));