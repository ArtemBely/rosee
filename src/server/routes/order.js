import React from 'react';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Order from '../../components/Order';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       </head>
                     <body>
                   <div id="app">
                 ${buy}
              </div>
            </body>
        </html>`
    );
});

export default router;
