import { Router } from 'express'
import { ctrlCreateRecord, ctrlListRecords } from '../../modules/arduino/controller'

const recordRouter = Router()

recordRouter.get('/', ctrlListRecords)
recordRouter.post('/', ctrlCreateRecord)

export { recordRouter }
