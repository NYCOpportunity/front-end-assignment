#!/usr/bin/env node

'use strict'

/**
 * Dependencies
 */

const path = require('path');
const express = require('express');


/**
 * Constants
 */

const PORT = process.env.PORT || '7000';
const DIST = path.join(process.env.PWD, (process.env.NODE_ENV === 'test') ? 'test' : 'dist');

/**
 * The Express App
 */

let app = express();

app.get('/*', (request, resolve) => {
  let req = request.params[0];

  let page = (req === '')
    ? 'index.html' : (req.includes('.'))
      ? req : `${req}.html`;

  resolve.sendFile(`${DIST}/${page}`);
});

app.listen(PORT, () => {
  console.log(`ENV: ${process.env.NODE_ENV}`);

  console.log(`Running @ http://localhost:${PORT}`);
})
