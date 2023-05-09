import { Router } from 'express'
import staticData from '../data/staticData'

export const router = Router()

router.get('/', (_req, res) => {
  res.json(staticData)
})
