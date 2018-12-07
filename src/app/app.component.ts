import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Room } from './room';
import { HistoryComponent } from './history/history.component';
import { Coordinate } from './coordinate';
import { Direction } from './direction.enum';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    currentRoom: Room;
    private idCounter: number = 0;

    @ViewChild(HistoryComponent)
    private historyList: HistoryComponent;

    constructor() {
        this.currentRoom = new Room(<string><any>this.idCounter++, new Coordinate(), [Direction.NORTH, Direction.EAST, Direction.WEST]);
    }

    ngAfterViewInit() {
        this.addRoom(this.currentRoom);
    }

    enterRoom(direction: Direction): void {
        this.currentRoom = new Room(<string><any>this.idCounter++, this.currentRoom.coordinates.getDirection(direction), [direction]);
        this.addRoom(this.currentRoom);
    }

    private addRoom(rm: Room): void {
        this.historyList.addRoom(this.currentRoom);
    }
}
