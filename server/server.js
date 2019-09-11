const path = require('path')
const express = require('express')

const tankRoutes = require('./routes/tanks')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/api/v1/tanks', tankRoutes)

module.exports = server
