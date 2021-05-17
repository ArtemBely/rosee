import React from 'react';
import serialize from 'serialize-javascript';
import passport from 'passport';
import mongoose from 'mongoose';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Order from '../../components/Order';
import User from '../models/User.js';
const express = require('express');

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get(['/everyMonth', '/halfYear', 'everyYear', '/'], notLoggedIn, (req, res) => {
  const buy = renderToString(
    <StaticRouter>
       <Order />
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
                       </head>
                     <body>
                   <div id="app">
                 ${buy}
              </div>
            </body>
        </html>`
    );
});

router.post(['/', '/everyMonth', '/everyYear', '/halfYear'], (req, res, done) => {
  var {
         username, userphone, email, timestamp, adminComment, letter, useraddress,
         comments, password, typeOfSkin, typeOfPayment
      } = req.body;

  req.checkBody('username', "Поле 'Имя и фамилия' должно быть заполнено").notEmpty();
  req.checkBody('userphone', "Неверный номер телефона").isLength({min: 11});
  req.checkBody('useraddress', "Поле 'Адрес получателя' должно быть заполнено").notEmpty();
  req.checkBody('email', 'Неправильный формат Email').isEmail();
  req.checkBody('password', 'Минимально число символов - 5').isLength({min: 5});

  console.log(req.originalUrl);
  var errors = req.validationErrors();

  if(errors) {
    console.log(errors);
    var err = errors.map(error => error.msg);
    const order = renderToString(
      <StaticRouter>
          <Order />
      </StaticRouter>
    )
     return res.send(
      `<!DOCTYPE html>
            <html>
                  <head>
                    <title>Валидация</title>
                         <link rel="stylesheet" type="text/css" href="../main.css">
                           <meta name="viewport" content="width=device-width, initial-scale=1">
                             <script src='/bundle.js' defer></script>
                             <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
                             <script>window.__INITIAL_TYPE__= ${serialize(typeOfSkin)}</script>
                             </head>
                           <body>
                         <div id="app">
                       ${order}
                    </div>
                  </body>
            </html>`
    )
  }

  User.findOne({email: email}, function(err, user) {
  if (err) {
    return done(err);
  }
  if(user) {
    const errors = ['Такой Email уже используется'];
    const cond = req.isAuthenticated();
    const mark = renderToString(
      <StaticRouter>
         <Order />
      </StaticRouter>
    )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Speaqiz - Регистрация</title>
                <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
                   <script src='/bundle.js' defer></script>
                     <script>window.__INITIAL_ERRORS__= ${serialize(errors)}</script>
                     <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                     <title>Практикуй английский</title>
                      </head>
                    <body>
                   <div id="app">
                 ${mark}
              </div>
            </body>
        </html>
    `
  );
  return done(null, false);
}

var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var newUser = new User({
  username: username,
  userphone: userphone,
  email: email,
  timestamp: new Date().getDate() + ' ' + months[(new Date().getMonth() + 2)],
  adminComment: '',
  password: password,
  useraddress: useraddress,
  typeOfPayment: typeOfPayment,
  typeOfSkin: typeOfSkin,
  comments: comments,
  letter: letter
});

User.createUser(newUser, function(err, user) {
  if (err) throw err;
  console.log(user);
});

const cond = req.isAuthenticated();
const indicate = 'Вы успешно зарегестрировались и теперь можете войти в личный кабинет!';
const they = renderToString(
      <StaticRouter>
         <Order />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
            <html>
                <head>
                   <title>Speaqiz - Регистрация</title>
                      <link rel="stylesheet" type="text/css" href="../main.css">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                         <script src='/bundle.js' defer></script>
                            <script>window.__INITIAL_STATE__ = ${serialize(indicate)}</script>
                              <script>window.__INITIAL_COND__= ${serialize(cond)}</script>
                              </head>
                            <body>
                           <div id="app">
                        ${they}
                  </div>
              </body>
        </html>
      `
    )
  });
});

passport.use('local.signin', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
function(req, email, password, done) {
User.findOne({email: email}, async function(err, user) {
if(err) {
  console.log(err);
  return done(err);
}

    if(!user) {
      req.flash('errors', 'Не найдено пользователей, возможно вы еще не зарегистрировались');
      return done(null, false);
    }

    User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if(isMatch) {
          return done(null, user);
        }
        else {
          req.flash('errors', 'Неверный пароль');
          return done(null, false)
        }
       })

    });
}));

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
