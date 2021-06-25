import React from 'react';
import serialize from 'serialize-javascript';
import passport from 'passport';
import mongoose from 'mongoose';
import axios from 'axios';
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

router.get(['/everyMonth', '/everyMonthCombi', '/everyMonthFat', '/everyMonthDry',
'/halfYear', '/halfYearCombi', '/halfYearFat', '/halfYearDry',
'/everyYear', '/everyYearCombi', '/everyYearFat', '/everyYearDry', '/'], notLoggedIn, async (req, res) => {
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

                                                           <script>
                                                           !function(f,b,e,v,n,t,s)
                                                           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                                           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                                           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                                           n.queue=[];t=b.createElement(e);t.async=!0;
                                                           t.src=v;s=b.getElementsByTagName(e)[0];
                                                           s.parentNode.insertBefore(t,s)}(window, document,'script',
                                                           'https://connect.facebook.net/en_US/fbevents.js');
                                                           fbq('init', '299294384104664');
                                                           fbq('track', 'PageView');
                                                           </script>
                                                           <noscript><img height="1" width="1" style="display:none"
                                                           src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                                                           /></noscript>

                                                           <script type="text/javascript" >
                                                              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                                              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                                              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                                              ym(80629396, "init", {
                                                                   clickmap:true,
                                                                   trackLinks:true,
                                                                   accurateTrackBounce:true,
                                                                   webvisor:true
                                                              });
                                                           </script>
                                                           <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>


                                                           <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                                                           <script>
                                                             window.dataLayer = window.dataLayer || [];
                                                             function gtag(){dataLayer.push(arguments);}
                                                             gtag('js', new Date());

                                                             gtag('config', 'G-S8E1VB6FRK');
                                                       </script>
                       </head>
                     <body>
                   <div id="app">
                 ${buy}
              </div>
            </body>
        </html>`
    );
});

router.post(['/', '/everyMonth', '/everyYear', '/halfYear'], async (req, res, done) => {

  var {
         username, userphone, email, ipAddress, timestamp, adminComment, letter, useraddress,
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

                                                                 <script>
                                                                 !function(f,b,e,v,n,t,s)
                                                                 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                                                 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                                                 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                                                 n.queue=[];t=b.createElement(e);t.async=!0;
                                                                 t.src=v;s=b.getElementsByTagName(e)[0];
                                                                 s.parentNode.insertBefore(t,s)}(window, document,'script',
                                                                 'https://connect.facebook.net/en_US/fbevents.js');
                                                                 fbq('init', '299294384104664');
                                                                 fbq('track', 'PageView');
                                                                 </script>
                                                                 <noscript><img height="1" width="1" style="display:none"
                                                                 src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                                                                 /></noscript>

                                                                 <script type="text/javascript" >
                                                                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                                                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                                                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                                                    ym(80629396, "init", {
                                                                         clickmap:true,
                                                                         trackLinks:true,
                                                                         accurateTrackBounce:true,
                                                                         webvisor:true
                                                                    });
                                                                 </script>
                                                                 <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>


                                                                 <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                                                                 <script>
                                                                   window.dataLayer = window.dataLayer || [];
                                                                   function gtag(){dataLayer.push(arguments);}
                                                                   gtag('js', new Date());

                                                                   gtag('config', 'G-S8E1VB6FRK');
                                                                 </script>
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

                                                         <script>
                                                         !function(f,b,e,v,n,t,s)
                                                         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                                         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                                         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                                         n.queue=[];t=b.createElement(e);t.async=!0;
                                                         t.src=v;s=b.getElementsByTagName(e)[0];
                                                         s.parentNode.insertBefore(t,s)}(window, document,'script',
                                                         'https://connect.facebook.net/en_US/fbevents.js');
                                                         fbq('init', '299294384104664');
                                                         fbq('track', 'PageView');
                                                         </script>
                                                         <noscript><img height="1" width="1" style="display:none"
                                                         src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                                                         /></noscript>

                                                         <script type="text/javascript" >
                                                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                                            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                                            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                                            ym(80629396, "init", {
                                                                 clickmap:true,
                                                                 trackLinks:true,
                                                                 accurateTrackBounce:true,
                                                                 webvisor:true
                                                            });
                                                         </script>
                                                         <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>


                                                         <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                                                         <script>
                                                           window.dataLayer = window.dataLayer || [];
                                                           function gtag(){dataLayer.push(arguments);}
                                                           gtag('js', new Date());

                                                           gtag('config', 'G-S8E1VB6FRK');
                                                         </script>
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
  letter: letter,
  ipAddress: ipAddress,
  cancel: 'no'
});

User.createUser(newUser, function(err, user) {
  if (err) throw err;
  console.log(user);
});

const cond = req.isAuthenticated();
/*const indicate = 'Вы успешно зарегестрировались и теперь можете войти в личный кабинет!';
const they = renderToString(
      <StaticRouter>
         <Order />
      </StaticRouter>
    )*/
      console.log(req.originalUrl);
      if(req.originalUrl == '/order/halfYear') {
        res.redirect('https://pay.fondy.eu/s/OnCUN8IoAFd');
      }
      if(req.originalUrl == '/order/everyMonth') {
        res.redirect('https://pay.fondy.eu/s/PI3dMfrP');
      }
      if(req.originalUrl == '/order/everyYear') {
        res.redirect('https://pay.fondy.eu/s/BQo3bkVg');
      }
    /*res.send(
      `<!DOCTYPE html>
            <html>
                <head>
                   <title>Speaqiz - Регистрация</title>
                      <link rel="stylesheet" type="text/css" href="../main.css">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                         <script src='/bundle.js' defer></script>
                            <script>window.__INITIAL_STATE__ = ${serialize(indicate)}</script>
                              <script>window.__INITIAL_COND__= ${serialize(cond)}</script>

                                                                  <script>
                                                                  !function(f,b,e,v,n,t,s)
                                                                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                                                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                                                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                                                  n.queue=[];t=b.createElement(e);t.async=!0;
                                                                  t.src=v;s=b.getElementsByTagName(e)[0];
                                                                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                                                                  'https://connect.facebook.net/en_US/fbevents.js');
                                                                  fbq('init', '299294384104664');
                                                                  fbq('track', 'PageView');
                                                                  </script>
                                                                  <noscript><img height="1" width="1" style="display:none"
                                                                  src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                                                                  /></noscript>

                                                                  <script type="text/javascript" >
                                                                     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                                                     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                                                     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                                                     ym(80629396, "init", {
                                                                          clickmap:true,
                                                                          trackLinks:true,
                                                                          accurateTrackBounce:true,
                                                                          webvisor:true
                                                                     });
                                                                  </script>
                                                                  <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>


                                                                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                                                                  <script>
                                                                    window.dataLayer = window.dataLayer || [];
                                                                    function gtag(){dataLayer.push(arguments);}
                                                                    gtag('js', new Date());

                                                                    gtag('config', 'G-S8E1VB6FRK');
                                                                  </script>
                              </head>
                            <body>
                           <div id="app">
                        ${they}
                  </div>
              </body>
        </html>
      `
    );*/
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
