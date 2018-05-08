import mongoose from 'mongoose'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import moment from 'moment'

import config from './config'
import routes from './routes'
import {
  cron,
  fetchData,
} from './cron'

const makeConnection = () =>
  mongoose.connect(config.mongo.uri)

const runServer = () => {
  makeConnection()

  const app = express()
  const views = path.join(__dirname, 'views')
  const publicFiles = path.join(__dirname, 'public')

  app.locals.moment = moment

  app.set('views', views)
  app.set('view engine', 'pug')

  app.use(bodyParser.json())
  app.use(express.static(publicFiles))
  app.use('/', routes)

  app.listen(3000, () => console.log('Running server on http://localhost:3000/'))

  fetchData()
  cron()
}

export default runServer
