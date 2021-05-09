import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../components/App';
import serialize from 'serialize-javascript';
import passport from 'passport';
const router = express.Router();


router.get('/', notLoggedIn, (req, res) => {
  const errors = req.flash('errors');
  const buy = renderToString(
    <StaticRouter>
       <App />
    </StaticRouter>
  )
  return res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='/bundle.js' defer></script>
                       <script>window.__INITIAL_MESSAGES__ = ${serialize(errors)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${buy}
               </div>
              <script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.0/lottie.js'></script>
            </body>
        </html>`
    );
});

router.post('/',
    passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/enter',
    passReqToCallback: true
  })
);

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
