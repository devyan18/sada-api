import { Router } from 'express'
import staticData from '../data/staticData'

export const router = Router()

router.get('/', (_req, res) => {
  res.json(staticData)
})

router.post('/', (req, res) => {
  const { name, age } = req.body
  res.json({ name, age })
})
