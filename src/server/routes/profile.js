import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Profile from '../../components/Profile';
import User from '../models/User.js';
import passport from 'passport';

const router = express.Router();

router.get(['/', '/changeName', '/changeMail', '/changePhone', '/changeAddress'], isLoggedIn, (req, res) => {
  let cond = req.isAuthenticated();
  let user = req.user;
  const congrats = renderToString(
    <StaticRouter>
       <Profile />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

router.post('/nameChange', (req, res, next) => {
  let user = req.user;
  user.username = req.body.userName;
  user.save();
  console.log(user);
  res.redirect('/profile');
});
router.post('/phoneChange', (req, res, next) => {
  let user = req.user;
  user.userphone = req.body.userPhone;
  user.save();
  console.log(user);
  res.redirect('/profile');
});
router.post('/addressChange', (req, res, next) => {
  let user = req.user;
  user.useraddress = req.body.userAddress;
  user.save();
  console.log(user);
  res.redirect('/profile');
});

router.post('/passChange', (req, res, next) => {
    var user = req.user;
    var newpass = req.body.password;
    user.password = newpass;

    user.save(function(err){
        if (err) { next(err) }
        else {
          console.log(user);
          res.redirect('/profile');
        }
    });
});

router.get('/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/');
}

export default router;
