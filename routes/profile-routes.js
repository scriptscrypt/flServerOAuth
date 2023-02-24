const router = require("express").Router();
const authCheck = require("./conditionals").authCheck

router.get("/view", authCheck, (req, res)=>{
    res.render("profile", {varName : req.user.keyUserName, varGoogleId : req.user.keyGoogleId})
})


module.exports = router;
