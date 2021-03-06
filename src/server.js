/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const server = express()
const port = 8080

const PATH = 'src/examples/example'
const EXAMPLES = '1234'.split('')
const error = `Invalid example, please choose one of ${EXAMPLES}`

server.get('/routes/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  if (!EXAMPLES.includes(req.params.id)) return res.status(400).json({ error })

  const file = `${PATH + req.params.id}/millenium-falcon.json`

  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  const routes_db = data['routes_db']

  // Check if path is absolute or relative
  const database = routes_db.includes('/') ? routes_db : `${PATH + req.params.id}/${routes_db}`
  const db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE)
  db.all('select * from ROUTES', [], (_, routes) => res.json({ routes }))
  db.close()
})

server.get('/empire/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  if (!EXAMPLES.includes(req.params.id)) return res.status(400).json({ error })

  const file = `${PATH + req.params.id}/empire.json`
  fs.readFile(file, (_, json) => res.json(JSON.parse(json)))
})

server.get('/millenium-falcon/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  if (!EXAMPLES.includes(req.params.id)) return res.status(400).json({ error })

  const file = `${PATH + req.params.id}/millenium-falcon.json`
  fs.readFile(file, (_, json) => res.json(JSON.parse(json)))
})

server.get('/answer/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  if (!EXAMPLES.includes(req.params.id)) return res.status(400).json({ error })

  const file = `${PATH + req.params.id}/answer.json`
  fs.readFile(file, (_, json) => res.json(JSON.parse(json)))
})

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
