const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.json({strict: true}))

// app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.listen(3000);
