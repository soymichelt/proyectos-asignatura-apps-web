import Perfil from './../perfil/contenedores/perfil-container';
import Estudiantes from './../estudiantes/contenedores/estudiantes-contenedor';
import NotFound404 from './../404/componentes/404';

const serverRoutes = [
    {
        path: '/',
        exact: true,
        component: Perfil,
    },
    {
        path: '/estudiantes',
        exact: true,
        component: Estudiantes,
    },
    {
        name: 'NotFound404',
        component: NotFound404,
    }
];

export default serverRoutes;