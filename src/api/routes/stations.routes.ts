import { Router } from 'express'
import {
  ctrlCreateStation,
  ctrlDeleteStation,
  ctrlGetStation,
  ctrlListStations,
  ctrlUpdateStation
} from '../../modules/stations/controller'

export const stationRouter = Router()

stationRouter.get('/', ctrlListStations)
stationRouter.get('/:id', ctrlGetStation)
stationRouter.post('/', ctrlCreateStation)
stationRouter.put('/:id', ctrlUpdateStation)
stationRouter.delete('/:id', ctrlDeleteStation)
