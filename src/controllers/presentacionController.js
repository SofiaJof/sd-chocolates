const fs = require('fs');
const path = require('path');

const presentacionFilePath = path.join(__dirname, "../data/presentacion.json");
const presentacion = JSON.parse(fs.readFileSync(presentacionFilePath, 'utf-8'));

const presentacionController = {
    presentacion: (req,res)=>{
        res.render("products/presentacion",{presentacion:presentacion})
    }
}

module.exports = presentacionController;