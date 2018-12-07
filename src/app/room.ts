import { RoomDoors } from './room-doors';
import { Coordinate } from './coordinate';
import { Direction } from './direction.enum';

export class Room {
    name: string;
    coordinates: Coordinate;
    doors: RoomDoors;

    constructor(name:string = 'defaultRoom', coordinates: Coordinate, entryDoor?: Direction[]) {
        this.name = name;
        this.doors = new RoomDoors(entryDoor);
        this.coordinates = coordinates;
    }

    getDoorCount(): number {
        return this.doors.getCount();
    }
}
