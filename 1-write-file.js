/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

const fs = require('fs');

fs.writeFile("test.txt", "hi girl", (err) => {
    if (err) {
        console.log("Ha ocurrido un error: ", err);
    }
    console.log('File written successfully!');
})