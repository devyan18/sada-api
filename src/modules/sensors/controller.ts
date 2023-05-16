import { Request, Response } from 'express'
import {
  createSensor,
  deleteSensor,
  getSensor,
  listSensors,
  updateSensor
} from './services'

export async function ctrlCreateSensor(req: Request, res: Response) {
  try {
    const sensor = await createSensor(req.body)
    res.status(201).json(sensor)
  } catch (error) {
    res.status(400).json({ error: 'Error to create sensor' })
  }
}

export async function ctrlListSensors(req: Request, res: Response) {
  try {
    const {
      stationId,
      measurementUnitId
    } = req.query

    if (stationId && isNaN(Number(stationId))) throw new Error('stationId must be a number')
    if (measurementUnitId && isNaN(Number(measurementUnitId))) throw new Error('measurementId must be a number')

    const sensors = await listSensors({
      stationId: stationId ? Number(stationId) : undefined,
      measurementUnitId: measurementUnitId ? Number(measurementUnitId) : undefined
    })
    res.status(200).json(sensors)
  } catch (error) {
    res.status(400).json({ error: 'Error to list sensors' })
  }
}

export async function ctrlGetSensor(req: Request, res: Response) {
  try {
    const sensor = await getSensor(Number(req.params.id))
    res.status(200).json(sensor)
  } catch (error) {
    res.status(400).json({ error: 'Error to get sensor' })
  }
}

export async function ctrlUpdateSensor(req: Request, res: Response) {
  try {
    const sensor = await updateSensor(Number(req.params.id), req.body)
    res.status(200).json(sensor)
  } catch (error) {
    res.status(400).json({ error: 'Error to update sensor' })
  }
}

export async function ctrlDeleteSensor(req: Request, res: Response) {
  try {
    await deleteSensor(Number(req.params.id))
    res.status(200).json({ message: 'Sensor deleted' })
  } catch (error) {
    res.status(400).json({ error: 'Error to delete sensor' })
  }
}
