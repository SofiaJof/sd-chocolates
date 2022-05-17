const chocolatesController = {
    chocolates: (req,res)=>{
        res.render("products/chocolates")
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
    }
}

module.exports = chocolatesController;