import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';
import Routes from '../components/routes';
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import cors from 'cors';
import passport from 'passport';
import flash from 'connect-flash';
import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import orderRouter from './routes/order';
import enterRouter from './routes/enter';
import profileRouter from './routes/profile';
import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 5000;
const CONNECTION_URI = process.env.MONGODB_URI;


var privateKey = fs.readFileSync(path.resolve('src/server/ssl/rosee.ws.key'));
var certificate = fs.readFileSync(path.resolve('src/server/ssl/rosee.ws.pem'));

var credentials = {
  key: privateKey,
  cert: certificate
}

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database rosee_customers completed');
  }
);

app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(cors({
  methods:['GET','POST'],
  credentials: true
}));

app.use('/order', orderRouter);
app.use('/enter', enterRouter);
app.use('/profile', profileRouter);
app.use('/api', apiRouter);

app.get('*', notLoggedIn, (req, res, next) => {
  const activeRouter = Routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then(data => {
    const context = { data };
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data} />
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>Маски по подписке</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                  <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(data)}</script>

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

                                     <!-- Google Tag Manager -->
                                   <script>
                                   setTimeout(() => {
                                   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                                   var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                  })(window,document,'script','dataLayer','GTM-T3252S2');
                                 }, 16000)
                                </script>
                                <!-- End Google Tag Manager -->

                            <title>COLLAB</title>
                          </head>
                        <body>
                        <!-- Google Tag Manager (noscript) -->
                        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3252S2"
                         height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                        <!-- End Google Tag Manager (noscript) -->
                       <div id="app">
                     ${markup}
                   </div>
                  <script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.0/lottie.js'></script>
                  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

/*
app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/

app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8080, () => {console.log('connecteed!')});
httpsServer.listen(443, () => {console.log('connecteed!')});
