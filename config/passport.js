let LocalStrategy = require('passport-local').Strategy
let User = require('../lib/models/users')

module.exports = (passport) => {

	let strategyConfig = {
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}

	passport.serializeUser((user, done) => {
		done(null, user.id)
	})

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user)
		})
	})

	passport.use('local-signup', new LocalStrategy(strategyConfig, (req, email, password, done) => {
		User.findOne({ 'email': email }, (err, user) => {
			if (err) return done(err)
			if (user) {
				return done(null, false, { message: 'That email is already taken.' })
			}
			let newUser = new User()
			newUser.email = email
			newUser.password = newUser.generateHash(password)
			newUser.save((err) => {
				if (err) return done(err)
				return done(null, newUser)
			})
		})
	}))

	passport.use('local-login', new LocalStrategy(strategyConfig, (req, email, password, done) => {
		console.log(email, password)
		User.findOne({ 'email': email }, (err, user) => {
			if (err) return done(err)
			if (!user) {
				return done(null, false, { message: 'No user found.' })
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' })
			}
			return done(null, user)
		})
	}))

}