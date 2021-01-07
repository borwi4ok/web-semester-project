var express = require('express')
var app = express()
var session = require('express-session')

const mongoose = require('mongoose')

const MongoStore = require('connect-mongo')(session)

// mongodb+srv://borwi4ok:test-steam123@cluster0.l3bq8.mongodb.net/test-steam?retryWrites=true&w=majority

mongoose.connect(
  'mongodb+srv://borwi4ok:test-steam123@cluster0.l3bq8.mongodb.net/test-steam?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    secret: '12345',
    resave: false,
    saveUninitialized: true,
  })
)

var OpenIDStrategy = require('passport-openid').Strategy
var SteamStrategy = new OpenIDStrategy(
  {
    // OpenID provider configuration
    providerURL: 'http://steamcommunity.com/openid',
    stateless: true,
    // How the OpenID provider should return the client to us
    returnURL: 'http://localhost:4000/auth/openid/return',
    realm: 'http://localhost:4000/',
  },
  function (identifier, done) {
    process.nextTick(function () {
      var user = {
        // http://steamcommunity.com/openid/id/76561197975696140
        identifier: identifier,
        // 76561197975696140
        steamId: identifier.match(/\d+$/)[0],
      }
      // In case of an error, we invoke done(err).
      // If we cannot find or don't like the login attempt, we invoke
      // done(null, false).
      // If everything went fine, we invoke done(null, user).
      return done(null, user)
    })
  }
)

var passport = require('passport')
passport.use(SteamStrategy)

passport.serializeUser(function (user, done) {
  done(null, user.identifier)
})

passport.deserializeUser(function (identifier, done) {
  done(null, {
    identifier: identifier,
    steamId: identifier.match(/\d+$/)[0],
  })
})

app.use(passport.initialize())
app.use(passport.session())

app.post('/auth/openid', passport.authenticate('openid'))

app.get('/auth/openid/return', passport.authenticate('openid'), function (request, response) {
  if (request.user) {
    // response.redirect('/?steamid=' + request.user.steamId)
    res.redirect('localhost:3000/inventory')
  } else {
    response.redirect('/?failed')
  }
})

app.post('/auth/logout', function (request, response) {
  request.logout()
  // After logging out, redirect the user somewhere useful.
  // Where they came from or the site root are good choices.
  response.redirect(request.get('Referer') || '/')
})

app.get('/', function (request, response) {
  response.write('<!DOCTYPE html>')
  if (request.user) {
    response.write((request.session.passport && JSON.stringify(request.user)) || 'None')
    response.write('<form action="/auth/logout" method="post">')
    response.write('<input type="submit" value="Log Out"/></form>')
  } else {
    if (request.query.steamid) {
      response.write('Not logged in.')
    }
    response.write('<form action="/auth/openid" method="post">')
    response.write(
      '<input name="submit" type="image" src="http://steamcommunity-a.' +
        'akamaihd.net/public/images/signinthroughsteam/sits_small.png" ' +
        'alt="Sign in through Steam"/></form>'
    )
  }
  response.send()
})

var port = 4000
var server = app.listen(port)
console.log('Listening on port ' + port)

// start()
