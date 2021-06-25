import React from 'react';
import express from 'express';
import mongoose from 'mongoose';
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
router.get('/cancel', (req, res, next) => {
  var user = req.user;
  user.cancel = 'yes';
  user.save(function(err) {
    if (err) throw err;
    console.log(user);
    res.redirect('/profile');
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
