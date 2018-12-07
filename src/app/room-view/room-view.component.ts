import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room';
import { Direction } from '../direction.enum';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  @Output() goThroughDoor: EventEmitter<string> = new EventEmitter();
  @Input() room: Room;
  public direction = Direction;

  constructor() { }

  ngOnInit() {
  }

  private doorClick(direction: Direction): void {
    this.goThroughDoor.emit(<string> <any> direction);
  }

}
