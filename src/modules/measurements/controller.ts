import { Request, Response } from 'express'

import {
  createMeasurement,
  deleteMeasurement,
  getMeasurement,
  listMeasurements,
  updateMeasurement
} from './services'

export async function ctrlCreateMeasurement(req: Request, res: Response) {
  try {
    const measurement = await createMeasurement(req.body)
    res.status(201).json(measurement)
  } catch (error) {
    res.status(400).json({ error: 'Error to create measurement' })
  }
}

export async function ctrlListMeasurements(_req: Request, res: Response) {
  try {
    const measurements = await listMeasurements()
    res.status(200).json(measurements)
  } catch (error) {
    res.status(400).json({ error: 'Error to list measurements' })
  }
}

export async function ctrlGetMeasurement(req: Request, res: Response) {
  try {
    const measurement = await getMeasurement(Number(req.params.id))
    res.status(200).json(measurement)
  } catch (error) {
    res.status(400).json({ error: 'Error to get measurement' })
  }
}

export async function ctrlUpdateMeasurement(req: Request, res: Response) {
  try {
    const measurement = await updateMeasurement(Number(req.params.id), req.body)
    res.status(200).json(measurement)
  } catch (error) {
    res.status(400).json({ error: 'Error to update measurement' })
  }
}

export async function ctrlDeleteMeasurement(req: Request, res: Response) {
  try {
    await deleteMeasurement(Number(req.params.id))
    res.status(200).json({ message: 'Measurement deleted' })
  } catch (error) {
    res.status(400).json({ error: 'Error to delete measurement' })
  }
}
