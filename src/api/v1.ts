import { Router } from 'express'

import { router as fakeRouter } from './routes/fake.routes'
import { stationRouter } from './routes/stations.routes'
import { measurementUnitRouter } from './routes/measurement-units.routes'
import { sensorRouter } from './routes/sensors.routes'
import { measurementRouter } from './routes/measurements.routes'

export const v1 = Router()

v1.use('/fake', fakeRouter)
v1.use('/stations', stationRouter)
v1.use('/units', measurementUnitRouter)
v1.use('/sensors', sensorRouter)
v1.use('/measurements', measurementRouter)

v1.get('/', (_req, res) => {
  res.send('Hello World')
})
