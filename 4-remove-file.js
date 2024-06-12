/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

const fs = require('fs');

fs.unlink("borrame.txt", err => {
    if (err) {
        console.log("ERROR: ", err);
    }

    console.log("Fichero borrado");
})