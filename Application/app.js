const express = require('express')
const app = express()
require('dotenv').config({path: __dirname + '/.env'})
const msg = process.env.MSG
app.get('/', (req, res) => res.send(`process.env['MSG']`))
app.listen(3000, () => console.log('Server ready'))
