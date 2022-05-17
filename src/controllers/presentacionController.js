const fs = require('fs');
const path = require('path');

const chocolatesFilePath = path.join(__dirname, "../data/chocolates.json");
const chocolates = JSON.parse(fs.readFileSync(chocolatesFilePath, 'utf-8'));

const presentacionController = {
    presentacion: (req,res)=>{
        res.render("products/presentacion",{chocolates:chocolates})
    }
}

module.exports = presentacionController;