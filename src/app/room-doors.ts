export class RoomDoors {
    North: boolean = false;
    South: boolean = false;
    East: boolean = false;
    West: boolean = false;

    constructor(entryDoor?: string) {
        this.North = this.getRandomBoolean();
        this.South = this.getRandomBoolean();
        this.East = this.getRandomBoolean();
        this.West = this.getRandomBoolean();

        if (entryDoor) {
            switch (entryDoor.toUpperCase()) {
                case 'NORTH':
                    this.North = true;
                    break;
                case 'SOUTH':
                    this.South = true;
                    break;
                case 'EAST':
                    this.East = true;
                    break;
                case 'WEST':
                    this.West = true;
                    break;
                default:
                    break;
            }
        }
    }

    getCount(): number {
        let count: number = 0;
        if (this.North) { count++; }
        if (this.South) { count++; }
        if (this.East) { count++; }
        if (this.West) { count++; }
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
