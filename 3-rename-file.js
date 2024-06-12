/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */

const fs = require('fs');

fs.rename("bird.jpg", "pajaro.jpg", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    }

    console.log("Cambio realizado");
})