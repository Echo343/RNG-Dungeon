import { RoomDoors } from './room-doors';

export class Room {
    name: string;
    doors: RoomDoors;

    constructor(name:string = 'defaultRoom', entryDoor?: string ) {
        this.name = name;
        this.doors = new RoomDoors(entryDoor);
    }

    getDoorCount(): number {
        return this.doors.getCount();
    }
}
