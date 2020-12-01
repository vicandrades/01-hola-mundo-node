const mascotas = [
    { nombre: 'pelusa', edad: 12, tipo: 'gato' },
    { nombre: 'puchini', edad: 12, tipo: 'perro' },
    { nombre: 'pulguita', edad: 12, tipo: 'gato' },
    { nombre: 'chanchito', edad: 12, tipo: 'perro' }
];

const mascotasIndexadas = mascotas.reduce((accumulator, currentValue) => {
    console.log(accumulator);

    return {
        ...accumulator,
        [currentValue.nombre]: currentValue
    }
}, {});

console.log(mascotasIndexadas);


/*const mascotasIndexadas = mascotas.reduce((accumulator, currentValue) => ({
    ...accumulator,
    [currentValue.nombre]: currentValue,
}), {});*/

var integrado = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(function(a, b) {
    console.log(a);
    console.log('a:', a, 'b:', b);
    return a.concat(b);
});