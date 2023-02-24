const express = require('express');
const router = require("express").Router()
const Works = require("../models/works-model") 

//Import middleware for Auth check
const authCheck = (req, res, next)=>{
  if(req.user){
      //User is logged in 
      next();
  }
  else{
      //User is not logged in 
      res.redirect("/auth/login")
  }
}
router.get("/postawork", authCheck, (req, res)=>{ 
    res.render("clientPostaWork");  
}); 

//async - await for not crashing the site and to avoid undefined values
router.post("/postawork", async (req, res)=>{
   
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