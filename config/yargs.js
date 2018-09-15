const opciones = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Define el valor de la tabla.'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Define el límite del valor de la tabla.'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}