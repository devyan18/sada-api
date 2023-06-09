import { Unit as Model, NewUnit } from './model'

export async function createUnit(unit: NewUnit) {
  try {
    return await Model.create(unit)
  } catch (error) {
    return new Error('Unable to create unit')
  }
}

export async function listUnits() {
  try {
    return await Model.findAll()
  } catch (error) {
    return new Error('Unable to list units')
  }
}

export async function getUnit(id: number) {
  try {
    return await Model.findByPk(id)
  } catch (error) {
    return new Error('Unable to get unit')
  }
}

export async function updateUnit(id: number, unit: NewUnit) {
  try {
    const unitToUpdate = await Model.findByPk(id)
    if (!unitToUpdate) {
      return new Error('Unit not found')
    }
    return await unitToUpdate.update(unit)
  } catch (error) {
    return new Error('Unable to update unit')
  }
}

export async function deleteUnit(id: number) {
  try {
    const unitToDelete = await Model.findByPk(id)
    if (!unitToDelete) {
      return new Error('Unit not found')
    }
    return await unitToDelete.destroy()
  } catch (error) {
    return new Error('Unable to delete unit')
  }
}
