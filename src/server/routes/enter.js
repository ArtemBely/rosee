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
              <title>Маски по подписке</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='/bundle.js' defer></script>
                       <script>window.__INITIAL_MESSAGES__ = ${serialize(errors)}</script>

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
