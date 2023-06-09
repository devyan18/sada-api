import { getMeasurementUnit } from '../units/services'
import { getStation } from '../stations/services'
import { NewSensor, Sensor } from './model'

export async function getSensor(sensorId: number) {
  try {
    const sensor = await Sensor.findByPk(sensorId)
    return sensor
  } catch (error) {
    console.log(error)
    throw new Error('Sensor not found')
  }
}

export async function listSensors(condition?: { stationId?: number, measurementUnitId?: number }) {
  try {
    if (condition && (condition.stationId || condition.measurementUnitId)) {
      const sensors = await Sensor.findAll({
        where: condition
      })
      return sensors
    }

    const sensors = await Sensor.findAll()
    return sensors
  } catch (error) {
    console.log(error)
    throw new Error('Error listing sensors')
  }
}

export async function createSensor(props: NewSensor) {
  try {
    const {
      stationId,
      measurementUnitId
    } = props

    if (!stationId || !measurementUnitId) return new Error('Station or measurement unit not found')

    const station = await getStation(stationId)

    if (!station) return new Error('Station not found')

    const unit = await getMeasurementUnit(measurementUnitId)

    if (!unit) return new Error('Measurement unit not found')

    const sensor = await Sensor.create(props)
    return sensor
  } catch (error) {
    console.log(error)
    throw new Error('Error creating sensor')
  }
}

export async function updateSensor(sensorId: number, props: NewSensor) {
  try {
    const sensor = await Sensor.findByPk(sensorId)

    if (!sensor) return new Error('Sensor not found')

    const updatedSensor = await sensor.update(props)
    return updatedSensor
  } catch (error) {
    console.log(error)
    throw new Error('Error updating sensor')
  }
}

export async function deleteSensor(sensorId: number) {
  try {
    const sensor = await Sensor.findByPk(sensorId)

    if (!sensor) return new Error('Sensor not found')

    await sensor.destroy()
  } catch (error) {
    console.log(error)
    throw new Error('Error deleting sensor')
  }
}
