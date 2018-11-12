export class RoomDoors {
    north: boolean = false;
    south: boolean = false;
    east: boolean = false;
    west: boolean = false;
    entryDoor: string;

    constructor(entryDoor?: string) {
        this.north = this.getRandomBoolean();
        this.south = this.getRandomBoolean();
        this.east = this.getRandomBoolean();
        this.west = this.getRandomBoolean();

        if (entryDoor) {
            this.entryDoor = entryDoor.toUpperCase();
            switch (entryDoor.toUpperCase()) {
                case 'NORTH':
                    this.north = true;
                    break;
                case 'SOUTH':
                    this.south = true;
                    break;
                case 'EAST':
                    this.east = true;
                    break;
                case 'WEST':
                    this.west = true;
                    break;
                default:
                    break;
            }
        }
    }

    getCount(): number {
        let count: number = 0;
        if (this.north) { count++; }
        if (this.south) { count++; }
        if (this.east) { count++; }
        if (this.west) { count++; }
        return count;
    }

    private getRandomBoolean(): boolean {
        let rnd: number = Math.floor(Math.random() * 2);
        if (rnd == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
