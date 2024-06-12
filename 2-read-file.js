/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */

const fs = require('fs');

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
        return;
    }
    console.log(data);
})