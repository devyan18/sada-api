import { Router } from 'express'

export const v1 = Router()

v1.get('/', (_req, res) => {
  res.send('Hello World')
})
