import { Request, Response } from 'express'
import { createNewRecord, listRecords } from './services'
import { NewRecord } from './model'

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
    const newRecordData: NewRecord = {
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      precipitationsPerMinute: req.body.precipitationsPerMinute,
      acumulatedPrecipitations: req.body.acumulatedPrecipitations,
      windDirection: req.body.windDirection,
      windForce: req.body.windForce,
      windSpeed: req.body.windSpeed
    }

    const newRecord = await createNewRecord(newRecordData)

    if (!newRecord) {
      return res.status(400).json({ error: 'Error to create record' })
    }

    res.status(201).json(newRecord)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Error to create record' })
  }
}
