import db from './firestore-config';

const CLAVE_PUBLICACIONES = 'publicaciones';

export const obtenerPublicaciones = async () => {
    const querySnapshot = await db.collection(CLAVE_PUBLICACIONES).get();
    const publicaciones = [];
    querySnapshot.forEach((documento) => {
        publicaciones.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return publicaciones;
}

export const guardarPublicacion = async (publicacion) => {
    await db.collection(CLAVE_PUBLICACIONES).add(
        publicacion
    );
}

export const actualizarPublicacion = async (publicacionId, publicacion) => {
    await db.collection(CLAVE_PUBLICACIONES).doc(publicacionId).update(
        publicacion
    );
}

export const eliminarPublicacion = async (publicacionId) => {
    await db.collection(CLAVE_PUBLICACIONES).doc(publicacionId).delete();
}