export const publicaciones = [
    {
        id: 1,
        nombres: 'Silvia Esther',
        apellidos: 'Duarte',
        edad: 19,
        estadoCivil: 'soltera',
    },
    {
        id: 2,
        nombres: 'Dionisio',
        apellidos: 'Guzmán',
        edad: 55,
        estadoCivil: 'soltero',
    },
    {
        id: 3,
        nombres: 'Ingrid Sharlotte',
        apellidos: 'Romero',
        edad: 20,
        estadoCivil: 'casada',
    },
];

export const buscarPorId = (datos, id) => {
    return datos.filter((item) => {
        return item.id === id;
    });
};