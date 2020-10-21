const express=require('express');
const router=express.Router();

router.get('*',(req,res)=>{

    res.status(404).render('404.ejs');
}); ///* tähendab ükskkõik mis päring

module.exports = router;
////404 templates https://freefrontend.com/html-css-404-page-templates/
//server.js kaustas tuleb seda välja kutsuda kõige viimasena, muidu kõik lehed saavad 404 errori.