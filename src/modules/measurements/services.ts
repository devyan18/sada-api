import { getSensor } from '../sensors/services'
import { Measurement, NewMeasurement } from './model'

export async function createMeasurement(props: NewMeasurement) {
  try {
    const { sensorId } = props

    const sensor = await getSensor(sensorId)

    if (!sensor) return new Error('Sensor not found')

    const measurement = await Measurement.create(props)
    return measurement
  } catch (error) {
    console.log(error)
    throw new Error('Error creating measurement')
  }
}

export async function getMeasurement(measurementId: number) {
  try {
    const measurement = await Measurement.findByPk(measurementId)
    return measurement
  } catch (error) {
    console.log(error)
    throw new Error('Measurement not found')
  }
}

export async function listMeasurements() {
  try {
    const measurements = await Measurement.findAll()
    return measurements
  } catch (error) {
    console.log(error)
    throw new Error('Error listing measurements')
  }
}

export async function updateMeasurement(measurementId: number, props: NewMeasurement) {
  try {
    const measurement = await Measurement.findByPk(measurementId)

    if (!measurement) return new Error('Measurement not found')

    const updatedMeasurement = await measurement.update(props)
    return updatedMeasurement
  } catch (error) {
    console.log(error)
    throw new Error('Error updating measurement')
  }
}

export async function deleteMeasurement(measurementId: number) {
  try {
    const measurement = await Measurement.findByPk(measurementId)

    if (!measurement) return new Error('Measurement not found')

    await measurement.destroy()
    return measurement
  } catch (error) {
    console.log(error)
    throw new Error('Error deleting measurement')
  }
}
