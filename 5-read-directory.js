/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */

const fs = require('fs');
const directory = "./backup-files";

fs.readdir(directory, (err, files) => {
    if (err){
        console.log("ERROR: ", err);
        return;
    }
console.log(files);
    files.forEach((file) => {
        console.log("Archivos en el directorio: ", file);
    });
});