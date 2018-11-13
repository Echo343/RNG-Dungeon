import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  @Output() goThroughDoor: EventEmitter<string> = new EventEmitter();
  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

  private doorClick(direction: string): void {
    this.goThroughDoor.emit(direction);
  }

}
