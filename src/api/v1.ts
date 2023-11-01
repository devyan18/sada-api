import { Router } from 'express'

// import { stationRouter } from './routes/stations.routes'
// import { unitRouter } from './routes/units.routes'
// import { sensorRouter } from './routes/sensors.routes'
// import { measurementRouter } from './routes/measurements.routes'

import { router as fakeRouter } from './routes/fake.routes'
import { recordRouter } from './routes/records.routes'
import {stationRouter} from './routes/stations.routes'

export const v1 = Router()

// v1.use('/stations', stationRouter)
// v1.use('/units', unitRouter)
// v1.use('/sensors', sensorRouter)
// v1.use('/measurements', measurementRouter)

v1.use('/fake', fakeRouter)
v1.use('/records', recordRouter)
v1.use('/stations', stationRouter);

v1.get('/', (_req, res) => {
  res.send('Hello World')
})
