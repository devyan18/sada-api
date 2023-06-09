import { Request, Response } from 'express'
import {
  createUnit,
  deleteUnit,
  getUnit,
  listUnits,
  updateUnit
} from './services'

export async function ctrlListUnits(_req: Request, res: Response) {
  try {
    const units = await listUnits()
    res.status(200).json(units)
  } catch (error) {
    res.status(400).json({ error: 'Error to list units' })
  }
}

export async function ctrlGetUnit(req: Request, res: Response) {
  try {
    const unit = await getUnit(Number(req.params.id))
    res.status(200).json(unit)
  } catch (error) {
    res.status(400).json({ error: 'Error to get unit' })
  }
}

export async function ctrlCreateUnit(req: Request, res: Response) {
  try {
    const newUnit = await createUnit(req.body)
    res.status(201).json(newUnit)
  } catch (error) {
    res.status(400).json({ error: 'Error to create unit' })
  }
}

export async function ctrlUpdateUnit(req: Request, res: Response) {
  try {
    const updatedUnit = await updateUnit(Number(req.params.id), req.body)
    res.status(200).json(updatedUnit)
  } catch (error) {
    res.status(400).json({ error: 'Error to update unit' })
  }
}

export async function ctrlDeleteUnit(req: Request, res: Response) {
  try {
    await deleteUnit(Number(req.params.id))
    res.status(200).json({ message: 'Unit deleted' })
  } catch (error) {
    res.status(400).json({ error: 'Error to delete Unit' })
  }
}
