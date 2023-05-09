
export enum WindForce {
    CALM = 'calm',
    LIGHT_AIR = 'light-air',
    LIGHT_BREEZE = 'light-breeze',
    GENTLE_BREEZE = 'gentle-breeze',
    MODERATE_BREEZE = 'moderate-breeze',
    FRESH_BREEZE = 'fresh-breeze',
    STRONG_BREEZE = 'strong-breeze',
    NEAR_GALE = 'near-gale',
    RUN = 'run'
}

export enum WindDirection {
    NORTH = 'north',
    NORTH_EAST = 'north-east',
    NORTH_WEST = 'north-west',
    EAST = 'east',
    SOUTH = 'south',
    SOUTH_EAST = 'south-east',
    SOUTH_WEST = 'south-west',
    WEST = 'west',
}

export interface Station {
    id: number;
    numberOfStation: number;
    temperature: number;
    humidity: number;
    precipitations: number;
    windSpeed: number;
    windForce: WindForce;
    windDirection: WindForce;
}

export interface FakeData {
    temperature: number;
    humidity: number;
    precipitations: number,
    windDirection: WindDirection,
    windForce: WindForce,
    windSpeed: number,
}