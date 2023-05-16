import { MeasurementUnit as Model, NewMeasurementUnit } from './model'

export async function createMeasurementUnit(measurementUnit: NewMeasurementUnit) {
  try {
    return await Model.create(measurementUnit)
  } catch (error) {
    return new Error('Unable to create measurement unit')
  }
}

export async function listMeasurementUnits() {
  try {
    return await Model.findAll()
  } catch (error) {
    return new Error('Unable to list measurement units')
  }
}

export async function getMeasurementUnit(id: number) {
  try {
    return await Model.findByPk(id)
  } catch (error) {
    return new Error('Unable to get measurement unit')
  }
}

export async function updateMeasurementUnit(id: number, measurementUnit: NewMeasurementUnit) {
  try {
    const measurementUnitToUpdate = await Model.findByPk(id)
    if (!measurementUnitToUpdate) {
      return new Error('Measurement unit not found')
    }
    return await measurementUnitToUpdate.update(measurementUnit)
  } catch (error) {
    return new Error('Unable to update measurement unit')
  }
}

export async function deleteMeasurementUnit(id: number) {
  try {
    const measurementUnitToDelete = await Model.findByPk(id)
    if (!measurementUnitToDelete) {
      return new Error('Measurement unit not found')
    }
    return await measurementUnitToDelete.destroy()
  } catch (error) {
    return new Error('Unable to delete measurement unit')
  }
}
