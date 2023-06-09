import { Request, Response } from 'express'
import { createNewRecord, listRecords } from './services'

export async function ctrlListRecords(_req: Request, res: Response) {
  try {
    const records = await listRecords()
    res.status(200).json(records)
  } catch (error) {
    res.status(400).json({ error: 'Error to list records' })
  }
}

export async function ctrlCreateRecord(req: Request, res: Response) {
  try {
    const newRecord = await createNewRecord(req.body)

    if (!newRecord) {
      return res.status(400).json({ error: 'Error to create record' })
    }

    res.status(201).json(newRecord)
  } catch (error) {
    res.status(400).json({ error: 'Error to create record' })
  }
}
