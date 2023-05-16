import { Router } from 'express'
import {
  ctrlCreateMeasurement,
  ctrlDeleteMeasurement,
  ctrlGetMeasurement,
  ctrlListMeasurements,
  ctrlUpdateMeasurement
} from '../../modules/measurements/controller'

export const measurementRouter = Router()

measurementRouter.get('/', ctrlListMeasurements)
measurementRouter.get('/:id', ctrlGetMeasurement)
measurementRouter.post('/', ctrlCreateMeasurement)
measurementRouter.put('/:id', ctrlUpdateMeasurement)
measurementRouter.delete('/:id', ctrlDeleteMeasurement)
