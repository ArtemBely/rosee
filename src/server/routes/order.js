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
import fs from 'fs';
import nodemailer from 'nodemailer';

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
              <title>Маски по подписке</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="facebook-domain-verification" content="fkrq79h1cd3seg9l630r9jdzuwkzp5" />
                       <script src='/bundle.js' defer></script>

                             <script>
                             setTimeout(() => {
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
                             }, 10000)
                             </script>

                             <noscript><img height="1" width="1" style="display:none"
                             src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                             /></noscript>

                             <script type="text/javascript" >
                              setTimeout(() => {
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(80629396, "init", {
                                     clickmap:true,
                                     trackLinks:true,
                                     accurateTrackBounce:true,
                                     webvisor:true
                                });
                              }, 11000)
                             </script>

                             <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

                             <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                             <script>
                                setTimeout(() => {
                                  window.dataLayer = window.dataLayer || [];
                                  function gtag(){dataLayer.push(arguments);}
                                  gtag('js', new Date());

                                  gtag('config', 'G-S8E1VB6FRK');
                                }, 12000)
                              </script>

                            <script>
                            setTimeout(() => {
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                            var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                           })(window,document,'script','dataLayer','GTM-T3252S2');
                          }, 16000)
                         </script>

                       </head>
                     <body>
                     <!-- Google Tag Manager (noscript) -->
                     <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3252S2"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                     <!-- End Google Tag Manager (noscript) -->
                   <div id="app">
                 ${buy}
              </div>
            </body>
        </html>`
    );
});

router.get('/findNewOne', (req, res) => {
  fs.readFile('inquiry.json', function(err, data) {
    if (err) throw err;
    else {
      let userNew = JSON.parse(data);
      var newUser = new User({
        username: userNew.username,
        userphone: userNew.userphone,
        email: userNew.email,
        timestamp: userNew.timestamp,
        adminComment: '',
        password: userNew.password,
        useraddress: userNew.useraddress,
        typeOfPayment: userNew.typeOfPayment,
        typeOfSkin: userNew.typeOfSkin,
        comments: userNew.comments,
        letter: userNew.letter,
        ipAddress: userNew.ipAddress,
        cancel: 'no'
      });
      User.createUser(newUser, function(err, user) {
        if (err) throw err;
        console.log(user);
      });
      return res.redirect('/');
    }
  });
});
router.get('/findNewOne/:id', (req, res) => {   //<-- костыль, фонди перенапраыляет на ссылку с credentials of user
  res.redirect('/findNewOne');
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
                    <title>Маски по подписке</title>
                         <link rel="stylesheet" type="text/css" href="../main.css">
                         <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                           <meta name="viewport" content="width=device-width, initial-scale=1">
                           <meta name="facebook-domain-verification" content="fkrq79h1cd3seg9l630r9jdzuwkzp5" />
                             <script src='/bundle.js' defer></script>
                             <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
                             <script>window.__INITIAL_TYPE__= ${serialize(typeOfSkin)}</script>

                                       <script>
                                       setTimeout(() => {
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
                                       }, 10000)
                                       </script>

                                       <noscript><img height="1" width="1" style="display:none"
                                       src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                                       /></noscript>

                                       <script type="text/javascript" >
                                        setTimeout(() => {
                                          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                          ym(80629396, "init", {
                                               clickmap:true,
                                               trackLinks:true,
                                               accurateTrackBounce:true,
                                               webvisor:true
                                          });
                                        }, 11000)
                                       </script>

                                       <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

                                       <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                                       <script>
                                          setTimeout(() => {
                                            window.dataLayer = window.dataLayer || [];
                                            function gtag(){dataLayer.push(arguments);}
                                            gtag('js', new Date());

                                            gtag('config', 'G-S8E1VB6FRK');
                                          }, 12000)
                                        </script>

                                      <script>
                                      setTimeout(() => {
                                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                                      var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                     })(window,document,'script','dataLayer','GTM-T3252S2');
                                    }, 16000)
                                   </script>

                             </head>
                           <body>
                           <!-- Google Tag Manager (noscript) -->
                           <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3252S2"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                           <!-- End Google Tag Manager (noscript) -->
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
              <title>Маски по подписке</title>
                <link rel="stylesheet" type="text/css" href="../main.css">
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
                 <meta name="facebook-domain-verification" content="fkrq79h1cd3seg9l630r9jdzuwkzp5" />
                   <script src='/bundle.js' defer></script>
                     <script>window.__INITIAL_ERRORS__= ${serialize(errors)}</script>
                     <script>window.__INITIAL_COND__= ${serialize(cond)}</script>

                               <script>
                               setTimeout(() => {
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
                               }, 10000)
                               </script>

                               <noscript><img height="1" width="1" style="display:none"
                               src="https://www.facebook.com/tr?id=299294384104664&ev=PageView&noscript=1"
                               /></noscript>

                               <script type="text/javascript" >
                                setTimeout(() => {
                                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                  ym(80629396, "init", {
                                       clickmap:true,
                                       trackLinks:true,
                                       accurateTrackBounce:true,
                                       webvisor:true
                                  });
                                }, 11000)
                               </script>

                               <noscript><div><img src="https://mc.yandex.ru/watch/80629396" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

                               <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8E1VB6FRK"></script>
                               <script>
                                  setTimeout(() => {
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', 'G-S8E1VB6FRK');
                                  }, 12000)
                                </script>

                              <script>
                              setTimeout(() => {
                              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                              var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                             })(window,document,'script','dataLayer','GTM-T3252S2');
                            }, 16000)
                           </script>

                     <title>Маски по подписке</title>
                      </head>
                    <body>
                    <!-- Google Tag Manager (noscript) -->
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3252S2"
                     height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    <!-- End Google Tag Manager (noscript) -->
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

    fs.writeFile('inquiry.json', JSON.stringify(newUser), 'utf-8', function(err) {
      if (err) throw err;
    });

      if(req.originalUrl == '/order/halfYear') {
        res.redirect('https://pay.fondy.eu/s/spEFdAgLYkf');
      }
      if(req.originalUrl == '/order/everyMonth') {
          res.redirect('https://pay.fondy.eu/s/wxz7RJSJ1xX');
      }
      if(req.originalUrl == '/order/everyYear') {
          res.redirect('https://pay.fondy.eu/s/1AU5ulqIzCO');
      }

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

router.post('/feedBack', (req, res, next) => {

  const output = `
<p> Данные о заказчике </p>
<ul>
  <li> Имя: ${req.body.name} </li>
  <li> email: ${req.body.email} </li>
  <li> Сообщение: ${req.body.questions} </li>
</ul>
  `;
async function main() {
  let transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'artem.bely@acorn.ws', // generated ethereal user
        pass: 'thebestproger' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false  // только для localhost
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Order from site" <artem.bely@acorn.ws>', // sender address
      to: "rosee@acorn.ws", // list of receivers
      subject: "New client ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
  return res.redirect('/');

/*
  const sendmail = require('sendmail')();
  const output = `
      <p> Данные о заказчике </p>
      <ul>
        <li> Имя: ${req.body.name} </li>
        <li> Контакт: ${req.body.email} </li>
      </ul>
       <p> оставил заявку на сайте: </p>
       <p> ${req.body.questions} </p>
  `;
sendmail({
    from: 'testrosee@protonmail.com',
    to: 'belysevartem9@gmail.com',
    subject: 'Request from Rosee',
    html: output,
  }, function(err, reply) {
    if(err) throw err;
    console.dir(reply);
  });
  res.redirect('/')*/
});

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
