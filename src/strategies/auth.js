const passport = require('passport')
const { Strategy } = require('passport-local')
const { Persona } = require('../models/persons')

passport.use(
  new Strategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    try {
      if (!email || !password) return done(null, false, { msg: 'missing credentials' })
      const user = await Persona.find({ email })
      if (!user) return done(null , false, { msg: 'User not found' })
      //falta comparar contraseñas =>
      done(null, user, {msg: 'authenticated successfully'})
    } catch (error) {
      done(error, null)
    }
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});