const express = require("express")
const app = express();  
//Import Auth routes 
const authRoutes = require("./routes/auth-routes")

//Import Profile routes 21Feb2023
const profileRoutes = require("./routes/profile-routes")

//Import Client routes 22Feb2023
const clientRoutes = require("./routes/client-routes")

const flRoutes = require("./routes/fl-routes")
//Import Routes ---------------------------------------------


// From ChatGPT - To resolve undefined returns
const bodyParser = require('body-parser');

// Set up the body-parser middleware to parse JSON data
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ 
    extended:false
}));




// Import passport-setup
const passportSetup = require("./config/passport-setup")
//Import Mongoose 
const mongoose = require("mongoose")
const keys = require("./config/keys") 


mongoose.set('strictQuery', true);

//21Feb2023
//Import Cookie session
const cookieSession = require("cookie-session")
const passport = require("passport")

// Resolved the session error for Passport by uninstalling and installing v0.5
// Link - https://stackoverflow.com/a/72519018/19887674 

 
// Set up view engine 
app.set("view engine", "ejs")


// Configured to allow cross-origin requests    
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
//Setup Cookies
app.use(cookieSession({
    maxAge: 24*60**60*1000,
    //For encryption we use cookies
    keys:[keys.session.cookieKey]
}));

   
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB 
mongoose.connect(keys.mongoDb.dbURI, ()=>{
    console.log("Connected to Mongo") 
})

app.listen(8000, ()=>{
    console.log("Listening on http://localhost:8000")
})

// Set up routes - kind of middleware 
app.use("/auth", authRoutes)
app.use("/profile", profileRoutes)
app.use("/client", clientRoutes)
app.use("/", flRoutes)

//Basic Home route that renders landing.ejs File
app.get("/", (req, res)=>{
    res.render("landing")
})

app.get("/dashboard", (req,res)=>{
    res.render("dashboard", {varUserExists : req.user})
})

module.exports = app;