import { Request, Response } from 'express'
import {
  createMeasurementUnit,
  deleteMeasurementUnit,
  getMeasurementUnit,
  listMeasurementUnits,
  updateMeasurementUnit
} from './services'

export async function ctrlListMeasurementUnits(_req: Request, res: Response) {
  try {
    const measurementUnits = await listMeasurementUnits()
    res.status(200).json(measurementUnits)
  } catch (error) {
    res.status(400).json({ error: 'Error to list measurement units' })
  }
}

export async function ctrlGetMeasurementUnit(req: Request, res: Response) {
  try {
    const measurementUnit = await getMeasurementUnit(Number(req.params.id))
    res.status(200).json(measurementUnit)
  } catch (error) {
    res.status(400).json({ error: 'Error to get measurement unit' })
  }
}

export async function ctrlCreateMeasurementUnit(req: Request, res: Response) {
  try {
    const measurementUnit = await createMeasurementUnit(req.body)
    res.status(201).json(measurementUnit)
  } catch (error) {
    res.status(400).json({ error: 'Error to create measurement unit' })
  }
}

export async function ctrlUpdateMeasurementUnit(req: Request, res: Response) {
  try {
    const measurementUnit = await updateMeasurementUnit(Number(req.params.id), req.body)
    res.status(200).json(measurementUnit)
  } catch (error) {
    res.status(400).json({ error: 'Error to update measurement unit' })
  }
}

export async function ctrlDeleteMeasurementUnit(req: Request, res: Response) {
  try {
    await deleteMeasurementUnit(Number(req.params.id))
    res.status(200).json({ message: 'Measurement unit deleted' })
  } catch (error) {
    res.status(400).json({ error: 'Error to delete measurement unit' })
  }
}
