import {
    publicaciones,
    buscarPorId,
} from './busqueda';

test('Prueba unitaria de búsqueda por Id', () => {

    const persona = buscarPorId(publicaciones, 1);
    const nombres = 'Silvia Esther';
    expect(persona[0].nombres).toBe(nombres);
    
});