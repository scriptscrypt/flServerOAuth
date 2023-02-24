//Middleware 
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

module.exports = { authCheck }  