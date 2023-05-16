import { NewStation, Station as StationModel } from './model'

export async function createStation(station: NewStation) {
  try {
    return await StationModel.create(station)
  } catch (error) {
    return new Error('Unable to create station')
  }
}

export async function listStations() {
  try {
    return await StationModel.findAll()
  } catch (error) {
    return new Error('Unable to list stations')
  }
}

export async function getStation(id: number) {
  try {
    return await StationModel.findByPk(id)
  } catch (error) {
    return new Error('Unable to get station')
  }
}

export async function updateStation(id: number, station: NewStation) {
  try {
    const stationToUpdate = await StationModel.findByPk(id)
    if (!stationToUpdate) {
      return new Error('Station not found')
    }
    return await stationToUpdate.update(station)
  } catch (error) {
    return new Error('Unable to update station')
  }
}

export async function deleteStation(id: number) {
  try {
    const stationToDelete = await StationModel.findByPk(id)
    if (!stationToDelete) {
      return new Error('Station not found')
    }
    return await stationToDelete.destroy()
  } catch (error) {
    return new Error('Unable to delete station')
  }
}
