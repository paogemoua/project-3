//var db = require("../models");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");
var session = require("express-session");


// Passport things
var strategy = new Auth0Strategy (
  {
    domain: "sportmeet.auth0.com",
    clientID: "Do2ia71b03qsQyZia46TINdn6sHJI5tn",
    clientSecret: "Dk0x0Ps-bWxEM2nl3xJvm-JeJ5V31zMmxZG_-UNiSZsoTtn6DAl75PAL6hPBi5w_", 
    callbackURL: "http://localhost:3000/callback"
  },

  function (accessToken, refreshToken, extraParam, profile, done) {
    return done(null, profile);
  }
);
  
passport.use(strategy);
  
passport.serializeUser(function(user, done){
  done(null, user);
});
  
passport.deserializeUser(function(user, done){
  done(null, user);
});
module.exports = function(app) {  

  app.use(
    session({
      secret:"SportMeet",
      resave: true,
      saveUninitialized: true
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(function (req, res, next){
    res.locals.loggedIn = false;
    if (req.session.passport && typeof req.session.passport.user != "undefined") {
      res.locals.loggedIn = true;
    }
    next();  
  });
  app.get("/", function (req, res, next){
    res.render("index");
  });
  
  app.get("/login", passport.authenticate("auth0", {
    scope: "openid profile"}));
  
  app.get("/logout", function (req, res){
    req.logout();
    res.redirect("/");
  });
  
  app.get("/callback", 
    passport.authenticate("auth0", {
      failureRedirect: "/failure"
    }),
    function(req, res) {
      res.redirect("/user");
    }
  );
  
  app.get("/user", function(req, res, next){
    res.render("user", {
      user: req.user
    });
  });
  
  // app.get("/failure", function(req, res, next){
  //   res.render("failure");
  // });

  app.get("/login", passport.authenticate("auth0", {
    scope: "openid profile"}));
};