/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const sqlite3 = require('sqlite3').verbose()

const computeOdds = require('../algo/index.js')

const [pathToFalcon, pathToEmpire] = process.argv.slice(2)

const falcon = JSON.parse(fs.readFileSync(pathToFalcon, 'utf8'))
const empire = JSON.parse(fs.readFileSync(pathToEmpire, 'utf8'))

const routes_db = falcon['routes_db']
let pathToDb = pathToFalcon.split('/')
pathToDb.pop()
pathToDb.push(routes_db)

const db = new sqlite3.Database(pathToDb.join('/'), sqlite3.OPEN_READWRITE)

db.all('select * from ROUTES', [], (_, routes) => {
  const odds = computeOdds(falcon, empire, routes)
  console.log(odds)
})

db.close()
