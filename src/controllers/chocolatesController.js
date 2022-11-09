const fs = require('fs');
const path = require('path');

const chocolatesFilePath = path.join(__dirname, "../data/chocolates.json");
const chocolates = JSON.parse(fs.readFileSync(chocolatesFilePath, 'utf-8'));


const chocolatesController = {
    chocolates: (req,res)=>{
        res.render("products/chocolates",{chocolates:chocolates})
    },
    marroc:(req,res)=>{
        res.render("products/marroc")
    },
    DDL: (req,res)=>{
        res.render("products/dulceDeLeche")
    },
    frutosSecos:(req,res)=>{
        res.render("products/conFrutosSecos")
    },
    galletitas:(req,res)=>{
        res.render("products/conGalletitas")
    },
    search:(req,res)=>{
        let buscador = req.query.nombre

        let buscado = []

        for(let i =0; i< chocolates.length; i++){
            if(chocolates[i].name.includes(buscador)){
                buscado.push(chocolates[i])
            }
        }

        res.render("products/chocolateBuscado", {buscado:buscado})
}
}
module.exports = chocolatesController;