import { NewStation, StationMongo } from './model';

export async function createStation(station: NewStation) {
  try {
    const newStation = new StationMongo(station);
    await newStation.save();
    return newStation;
  } catch (error) {
    throw new Error('Unable to create station');
  }
}

export async function listStations() {
  try {
    return await StationMongo.find();
  } catch (error) {
    throw new Error('Unable to list stations');
  }
}

export async function getStation(id: string) {
  try {
    const station = await StationMongo.findById(id);
    if (!station) {
      throw new Error('Station not found');
    }
    return station;
  } catch (error) {
    throw new Error('Unable to get station');
  }
}

export async function updateStation(id: string, updatedData: Partial<NewStation>) {
  try {
    const station = await StationMongo.findByIdAndUpdate(id, updatedData, { new: true });
    if (!station) {
      throw new Error('Station not found');
    }
    return station;
  } catch (error) {
    throw new Error('Unable to update station');
  }
}

export async function deleteStation(id: string) {
  try {
    const station = await StationMongo.findByIdAndDelete(id);
    if (!station) {
      throw new Error('Station not found');
    }
    return station;
  } catch (error) {
    throw new Error('Unable to delete station');
  }
}
