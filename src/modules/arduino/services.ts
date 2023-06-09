import { Record as Model, NewRecord } from './model'

export async function createNewRecord(record: NewRecord) {
  return Model.create(record)
}

export async function listRecords() {
  return Model.findAll()
}
