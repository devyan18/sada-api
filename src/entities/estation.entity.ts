export enum WindForce {
    CALM = 'calm',
    LIGHT_AIR = 'light-air',
    LIGHT_BREEZE = 'light-breeze',
    GENTLE_BREEZE = 'gentle-breeze',
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
