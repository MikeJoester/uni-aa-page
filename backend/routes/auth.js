const router = require('express').Router();
const express = require('express');
const passport = require('passport');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/google/failure'
    })
);

router.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});

router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

module.exports = router;