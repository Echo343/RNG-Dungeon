import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private rooms: Room[] = [];

  constructor() { }

  ngOnInit() {
  }

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

}
