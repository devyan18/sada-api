import { Router } from 'express'
import fs from 'fs'
import path from 'path'

export const router = Router()

router.get('/', (_req, res) => {
  fs.readFile(path.join(__dirname, '../data/staticData.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    }
    res.json(JSON.parse(data))
  })
})
