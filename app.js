const argv = require('./config/yargs.js').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors/safe');



let comando =  argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivoname => console.log('Archivo creado: ',colors.green(archivoname)))
            .catch(err => console.log(err));
            break;
    default:
        console.log('Comando no reconocido');
        break;
}



