import { Request, Response } from 'express'
import { createNewRecord, listRecords, listRecordsByStation} from './services'
import { NewRecord, RecordMongo } from './model'

export async function ctrlListRecords(req: Request, res: Response) {
  try {
    const stationId = req.query.stationId as string;
    let records;
    if (stationId) {
      records = await listRecordsByStation(stationId);
    } else {
      records = await listRecords();
    }
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ error: 'Error to list records' });
  }
}


export async function ctrlCreateRecord(req: Request, res: Response) {
  try {
      const newRecordData: NewRecord = {
      station: req.body.stationId,
      temperature: req.body.Temperatura,
      humidity: req.body.Humedad,
      pressure: req.body.Presion,
      precipitationsPerMinute: req.body.PrecipitacionM,
      acumulatedPrecipitations: req.body.PrecipitacionA,
      windDirection: req.body.DirViento,
      windForce: req.body.FueViento,
      windSpeed: req.body.VelViento,
      height: req.body.Altitud
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
