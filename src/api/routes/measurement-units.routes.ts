import { Router } from 'express'

import {
  ctrlCreateStation,
  ctrlDeleteStation,
  ctrlGetStation,
  ctrlListStations,
  ctrlUpdateStation
} from '../../modules/stations/controller'

export const measurementUnitRouter = Router()

measurementUnitRouter.get('/', ctrlListStations)
measurementUnitRouter.get('/:id', ctrlGetStation)
measurementUnitRouter.post('/', ctrlCreateStation)
measurementUnitRouter.put('/:id', ctrlUpdateStation)
measurementUnitRouter.delete('/:id', ctrlDeleteStation)
