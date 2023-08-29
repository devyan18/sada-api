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
    //     SADAUNO: {

    // Temperatura: 22.86000061,

    // Humedad: 52.22460938,

    // Presion: 1011.993347,

    // Altitud: 10.4675312,

    // DirViento: 'N',

    // VelViento: 0,

    // FueViento: 'Calmo',

    // PrecipitacionM: 0,

    // PrecipitacionA: 0.200000003

    // }

    const newRecordData: NewRecord = {
      temperature: req.body.Temperatura,
      humidity: req.body.Humedad,
      precipitationsPerMinute: req.body.PrecipitacionM,
      acumulatedPrecipitations: req.body.PrecipitacionA,
      windDirection: req.body.DirViento,
      windForce: req.body.FueViento,
      windSpeed: req.body.VelViento,
      height: req.body.Altitud
    }

    const newRecord = await createNewRecord(newRecordData)

    if (!newRecord) {
      return res.status(400).json({ error: 'Error to create record' })
    }

    res.status(201).json(newRecord)
  } catch (error) {
    console.log(req.body)
    res.status(400).json({ error: 'Error to create record' })
  }
}
