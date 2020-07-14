const fs = require('fs');
const { rejects } = require('assert');
const colors = require('colors');

let listarTabla = (base,limite = 10) =>{
    
    console.log('==================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==================='.green);
    return new Promise((res,rej)=>{
        if(!Number(base)&&!Number(limite)){
            rej(`El valor introducido ${base} o ${limite} no es valido`);
            return;
        }else{
            let mensaje = '';

            for (let i = 1; i <= limite; i++) {
                mensaje += `${base} * ${i} = ${base * i}\n`;
            }
            res(mensaje);
        }


    });
};

let crearArchivo = (base,limite = 10) => {

    return new Promise((res, rej) => {
        if (!Number(base)&&!Number(limite)) {
            rej(`El valor introducido ${base} o ${limite} no es valido`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rej(err);
            else res(`tabla-${base}.txt`);

        });

    });

};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
};