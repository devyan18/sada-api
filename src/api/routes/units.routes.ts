import { Router } from 'express'

import {
  ctrlCreateStation,
  ctrlDeleteStation,
  ctrlGetStation,
  ctrlListStations,
  ctrlUpdateStation
} from '../../modules/stations/controller'

export const unitRouter = Router()

unitRouter.get('/', ctrlListStations)
unitRouter.get('/:id', ctrlGetStation)
unitRouter.post('/', ctrlCreateStation)
unitRouter.put('/:id', ctrlUpdateStation)
unitRouter.delete('/:id', ctrlDeleteStation)
