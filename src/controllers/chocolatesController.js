const chocolatesController = {
    chocolates: (req,res)=>{
        res.render("products/chocolates")
    },
    DDL: (req,res)=>{
        res.render("products/dulceDeLeche")
    },
    frutosSecos:(req,res)=>{
        res.render("products/conFrutosSecos")
    },
    galletitas:(req,res)=>{
        res.render("products/conGalletitas")
    }
}

module.exports = chocolatesController;