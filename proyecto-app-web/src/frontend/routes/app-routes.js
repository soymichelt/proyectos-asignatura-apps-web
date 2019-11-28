import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Perfil from './../perfil/contenedores/perfil-container';
import PerfilAgregar from './../perfil-agregar/contenedores/perfil-agregar-contenedor';
import PerfilEliminar from './../perfil-eliminar/contenedores/perfil-eliminar-contenedor';
import NotFound404 from './../404/componentes/404';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Perfil} />
                <Route exact path='/agregar' component={PerfilAgregar} />
                <Route exact path='/eliminar/:publicacionId' component={PerfilEliminar} />
                <Route component={NotFound404} />
            </Switch>
        </BrowserRouter>
    );

}

export default AppRoutes;