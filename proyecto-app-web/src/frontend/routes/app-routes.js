import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Perfil from './../perfil/contenedores/perfil-container';
import Estudiantes from './../estudiantes/contenedores/estudiantes-contenedor';
import NotFound404 from './../404/componentes/404';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Perfil} />
                <Route exact path='/estudiantes' component={Estudiantes} />
                <Route component={NotFound404} />
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;