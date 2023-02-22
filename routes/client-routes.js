const express = require('express');
const router = require("express").Router()
const Works = require("../models/works-model") 


router.get("/postawork", (req, res)=>{
    res.render("clientPostaWork");  
});

router.post("/postawork",async (req, res)=>{
   
    const newWork = new Works({ 
        keyTitle : req.body.ipTitle,     
        keyDescription : req.body.ipDesc,
        keyLinks : req.body.ipLinks,  
        keyBudget : req.body.ipBudget,
        keyDeadline : req.body.ipDeadline,
    })

    await newWork.save()
    .then(savedModel => {
      // Redirect to a success page
      res.redirect('/dashboard');
    })
    .catch(error => {
      // Handle the error
      console.error(error.message);
      res.send("There was an error", error.message)
    //   res.redirect('/client/postawork');
    });
    
});

module.exports = router;