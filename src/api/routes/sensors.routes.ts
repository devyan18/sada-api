import { Router } from 'express'
import {
  ctrlCreateSensor,
  ctrlDeleteSensor,
  ctrlGetSensor,
  ctrlListSensors,
  ctrlUpdateSensor
} from '../../modules/sensors/controller'

export const sensorRouter = Router()

sensorRouter.get('/', ctrlListSensors)
sensorRouter.get('/:id', ctrlGetSensor)
sensorRouter.post('/', ctrlCreateSensor)
sensorRouter.put('/:id', ctrlUpdateSensor)
sensorRouter.delete('/:id', ctrlDeleteSensor)
