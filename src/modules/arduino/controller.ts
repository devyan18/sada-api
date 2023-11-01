import { Request, Response } from 'express'
import { createNewRecord, listRecords } from './services'
import { NewRecord, RecordMongo } from './model'

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
      station: req.body.SADAUNO.stationId,
      temperature: req.body.SADAUNO.Temperatura,
      humidity: req.body.SADAUNO.Humedad,
      pressure: req.body.SADAUNO.Presion,
      precipitationsPerMinute: req.body.SADAUNO.PrecipitacionM,
      acumulatedPrecipitations: req.body.SADAUNO.PrecipitacionA,
      windDirection: req.body.SADAUNO.DirViento,
      windForce: req.body.SADAUNO.FueViento,
      windSpeed: req.body.SADAUNO.VelViento,
      height: req.body.SADAUNO.Altitud
    }

    const newRecord = await createNewRecord(newRecordData)
    const newRecordMongo = new RecordMongo(newRecordData)

    await newRecordMongo.save()

    if (!newRecord) {
      return res.status(400).json({ error: 'Error to create record' })
    }

    res.status(200).json(newRecord)
  } catch (error) {
    console.log(req.body)
    res.status(400).json({ error: 'Error to create record' })
  }
}
