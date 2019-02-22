var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");


var strategy = new Auth0Strategy (
  {
    domain: "motank.auth0.com",
    clientID: "j_bCGaZyO59XGnXx4TbRSq6qH7y-vC80",
    clientSecret: "VBCIB8L5V_qdoWzpy-2eB-l8nJFVJ9DenogKuUreHgZPVRQg8L3X8YqYUOCTYwju", 
    callbackURL: "http://localhost:3000/callback"
  },
  