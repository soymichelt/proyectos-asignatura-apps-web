import Perfil from './../perfil/contenedores/perfil-container';
import PerfilAgregar from './../perfil-agregar/contenedores/perfil-agregar-contenedor';
import PerfilEliminar from './../perfil-eliminar/contenedores/perfil-eliminar-contenedor';
import NotFound404 from './../404/componentes/404';

const serverRoutes = [
    {
        path: '/',
        exact: true,
        component: Perfil,
    },
    {
        path: '/agregar',
        exact: true,
        component: PerfilAgregar,
    },
    {
        path: '/eliminar/:publicacionId',
        component: PerfilEliminar,
    },
    {
        name: 'NotFound404',
        component: NotFound404,
    }
];

export default serverRoutes;