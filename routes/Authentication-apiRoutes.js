var db = require("../models");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");
var session = require("express-session");


// Passport Stuff
var strategy = new Auth0Strategy (
  