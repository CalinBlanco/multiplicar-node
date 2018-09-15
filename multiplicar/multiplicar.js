// Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    if (!Number(base) && !Number(limite)) {
        reject(`La base: ${base}, y/o el límite: ${ limite } no son números!`);
        return;
    }

    console.log('===================================='.green);
    console.log(`==== Tabla de multiplicar del ${base} ====`.yellow);
    console.log('===================================='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`);
    };
}

let crearArchivo = (base, limite) => {
    console.log(Number(base));
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`La base: ${base}, y/o el límite: ${ limite } no son números!`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}