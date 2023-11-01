import { Request, Response } from 'express';
import {
  createStation,
  getStation,
  listStations,
  updateStation,
  deleteStation
} from './services';

export async function ctrlCreateStation(req: Request, res: Response) {
  try {
    const station = await createStation(req.body);
    res.status(201).json(station);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function ctrlListStations(_req: Request, res: Response) {
  try {
    const stations = await listStations();
    res.status(200).json(stations);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function ctrlGetStation(req: Request, res: Response) {
  try {
    const station = await getStation(req.params.id);
    res.status(200).json(station);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function ctrlUpdateStation(req: Request, res: Response) {
  try {
    const station = await updateStation(req.params.id, req.body);
    res.status(200).json(station);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function ctrlDeleteStation(req: Request, res: Response) {
  try {
    await deleteStation(req.params.id);
    res.status(200).json({ message: 'Station deleted' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
