import { Direction } from "./direction.enum";

export class Coordinate {
    xCoord: number = 0;
    yCoord: number = 0;

    constructor(x: number = 0, y: number = 0) {
        this.xCoord = x;
        this.yCoord = y;
    }

    toString(): string {
        return 'x:' + this.xCoord + ', y:' + this.yCoord;
    }

    getDirection(entryDoor: Direction): Coordinate {
        switch(entryDoor) {
            case Direction.NORTH:
                return this.getSouth();
            case Direction.SOUTH:
                return this.getNorth();
            case Direction.EAST:
                return this.getWest();
            case Direction.WEST:
                return this.getEast();
            default:
                return new Coordinate();
        }
    }

    private getEast(): Coordinate {
        return new Coordinate(this.xCoord + 1, this.yCoord);
    }
    
    private getWest(): Coordinate {
        return new Coordinate(this.xCoord - 1, this.yCoord);
    }

    private getNorth(): Coordinate {
        return new Coordinate(this.xCoord, this.yCoord + 1);
    }
    
    private getSouth(): Coordinate {
        return new Coordinate(this.xCoord, this.yCoord - 1);
    }
}
