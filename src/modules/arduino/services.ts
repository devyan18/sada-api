import { Record as Model, NewRecord } from './model';
import { RecordMongo } from './model';

export async function createNewRecord(record: NewRecord) {
  return Model.create(record);
}

export async function listRecords() {
  return Model.findAll();
}

export async function listRecordsByStation(stationId: string) {
  try {
    const records = await RecordMongo.find({ station: stationId });
    return records;
  } catch (error) {
    throw new Error('Unable to retrieve records for the station');
  }
}